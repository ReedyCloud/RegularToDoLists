using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using RegularTodoListAPI.DataContexts;
using RegularTodoListAPI.Dtos;
using RegularTodoListAPI.Models;

namespace RegularTodoListAPI.Controllers
{
    public class AuthController : ApiControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly DataContext _db;

        public AuthController(IConfiguration configuration, DataContext db)
        {
            _configuration = configuration;
            _db = db;
        }

        [HttpPost]
        public async Task<IActionResult> Register(UserFormDto userFormDto)
        {
            userFormDto.Email = userFormDto.Email.ToLower();

            if (await _db.Users.AnyAsync(x => x.Email == userFormDto.Email))
                return BadRequest("Taki email już istnieje.");

            var userToCreate = new User
            {
                Email = userFormDto.Email,
                Created = DateTime.Now
            };

            var createdUser = await RegisterInDb(userToCreate, userFormDto.Password);

            return StatusCode(201);
        }

        [HttpPost]
        public async Task<IActionResult> Login(UserFormDto userFormDto)
        {
            var userFromRepo = await LoginInDb(userFormDto.Email.ToLower(), userFormDto.Password);

            if (userFromRepo == null)
                return Unauthorized();

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, userFromRepo.Id.ToString()),
                new Claim(ClaimTypes.Name, userFromRepo.Email)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8
                .GetBytes(_configuration.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };

            var tokenHandler = new JwtSecurityTokenHandler();

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return Ok(new 
                { 
                    token = tokenHandler.WriteToken(token)
                });
        }

        #region Useful methods

        private async Task<User> LoginInDb(string email, string password)
        {
            var user = await _db.Users.FirstOrDefaultAsync(x => x.Email == email);

            if (user == null)
                return null;

            if (!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
                return null;

            return user;
        }

        private async Task<User> RegisterInDb(User user, string password)
        {
            byte[] passwordHash, passwordSalt;
            CreatePasswordHash(password, out passwordHash, out passwordSalt);

            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;

            await _db.Users.AddAsync(user);
            await _db.SaveChangesAsync();

            return user;
        }


        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != passwordHash[i])
                        return false;
                }
            }

            return true;
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }
            
        #endregion
    }
}
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace RegularTodoListAPI.Controllers
{
    public class AuthController : ApiControllerBase
    {
        // private readonly IAuthRepository _authRepository;
        // private readonly IConfiguration _configuration;
        // public AuthController(IAuthRepository authRepository, IConfiguration configuration)
        // {
        //     _configuration = configuration;
        //     _authRepository = authRepository;
        // }

        // [HttpPost]
        // public async Task<IActionResult> Register(PlayerFormDto playerFormDto)
        // {
        //     playerFormDto.Login = playerFormDto.Login.ToLower();

        //     if (await _authRepository.PlayerExists(playerFormDto.Login))
        //         return BadRequest("Taki login już istnieje.");

        //     var userToCreate = new Player
        //     {
        //         Login = playerFormDto.Login,
        //         Email = playerFormDto.Email,
        //         Created = DateTime.Now
        //     };

        //     var createdUser = await _authRepository.Register(userToCreate, playerFormDto.Password);

        //     return StatusCode(201);
        // }

        // [HttpPost]
        // public async Task<IActionResult> Login(PlayerFormDto playerFormDto)
        // {
        //     var userFromRepo = await _authRepository.Login(playerFormDto.Login.ToLower(), playerFormDto.Password);

        //     if (userFromRepo == null)
        //         return Unauthorized();

        //     var claims = new[]
        //     {
        //         new Claim(ClaimTypes.NameIdentifier, userFromRepo.Id.ToString()),
        //         new Claim(ClaimTypes.Name, userFromRepo.Login)
        //     };

        //     var key = new SymmetricSecurityKey(Encoding.UTF8
        //         .GetBytes(_configuration.GetSection("AppSettings:Token").Value));

        //     var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

        //     var tokenDescriptor = new SecurityTokenDescriptor
        //     {
        //         Subject = new ClaimsIdentity(claims),
        //         Expires = DateTime.Now.AddDays(1),
        //         SigningCredentials = creds
        //     };

        //     var tokenHandler = new JwtSecurityTokenHandler();

        //     var token = tokenHandler.CreateToken(tokenDescriptor);

        //     return Ok(new 
        //         { 
        //             token = tokenHandler.WriteToken(token)
        //         });
        // }
    }
}
using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using RegularTodoListAPI.DataContexts;
using RegularTodoListAPI.Models;

namespace RegularTodoListAPI.Controllers
{
    public class InitializeController : ApiControllerBase
    {
        private readonly DataContext _db;

        public InitializeController(DataContext db)
        {
            _db = db;
        }

        [HttpGet]
        public IActionResult Initialize()
        {
            if(_db.Users.ToList().Count == 0)
                _db.Users.Add(new User() { Created = DateTime.Now, Email = "RandomUser@gmail.com" });

            _db.SaveChanges();
            return Ok("Done");
        }
    }
}
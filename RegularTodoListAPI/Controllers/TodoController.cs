using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RegularTodoListAPI.Dtos;

namespace RegularTodoListAPI.Controllers
{
    public class TodoController : ApiControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> GetTodoList()
        {
            var res = new List<TodoItem>();

            var item1 = new TodoItem()
            {
                Id = 1,
                Name = "Brawo Bartek",
                Status = "Todo",
                StatusId = 1
            };
            var item2 = new TodoItem()
            {
                Id = 2,
                Name = "Udało Ci się tu dostać, programistyczny świrze",
                Status = "Finished",
                StatusId = 3
            };
            res.Add(item1);
            res.Add(item2);

            return Ok(res);
        }
    }
}
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RegularTodoListAPI.DataContexts;
using RegularTodoListAPI.Dtos;
using RegularTodoListAPI.Models;

namespace RegularTodoListAPI.Controllers
{
    public class TodoController : ApiControllerBase
    {
        private readonly DataContext _db;

        public TodoController(DataContext db)
        {
            _db = db;
        }

        [HttpGet]
        public IActionResult GetTodoLists()
        {
            var todoLists = _db.TodoLists.Where(x => x.UserId == 1).ToList();

            var res = new List<TodoListDto>();
            foreach (var todoList in todoLists)
            {
                var currTodoItems = _db.TodoItems.Where(x => x.TodoListId == todoList.Id).ToList();
                var todoItemsDto = new List<TodoItemDto>();

                foreach (var item in currTodoItems)
                {
                    todoItemsDto.Add(new TodoItemDto()
                    {
                        Id = item.Id,
                        Description = item.Description,
                        Name = item.Name,
                        Priority = item.Priority,
                        Status = item.Status,
                        TodoListId = item.TodoListId
                    });
                }

                res.Add(new TodoListDto()
                {
                    Id = todoList.Id,
                    Title = todoList.Title,
                    TodoItems = todoItemsDto
                });
            }

            return Ok(res);
        }

        [HttpGet]
        public IActionResult GetTodoList([FromQuery] int todoListId)
        {
            var todoList = _db.TodoLists.FirstOrDefault(x => x.Id == todoListId);
            var currTodoItems = _db.TodoItems.Where(x => x.TodoListId == todoList.Id).ToList();
            var todoItemsDto = new List<TodoItemDto>();
            foreach (var item in currTodoItems)
            {
                todoItemsDto.Add(new TodoItemDto()
                {
                    Id = item.Id,
                    Description = item.Description,
                    Name = item.Name,
                    Priority = item.Priority,
                    Status = item.Status,
                    TodoListId = item.TodoListId
                });
            }

            var res = new TodoListDto()
            {
                Id = todoList.Id,
                Title = todoList.Title,
                TodoItems = todoItemsDto
            };

            return Ok(res);
        }

        [HttpGet]
        public IActionResult GetTodoItem([FromQuery] int todoItemId)
        {
            var res = _db.TodoItems.FirstOrDefault(x => x.Id == todoItemId);

            return Ok(res);
        }

        [HttpPost]
        public IActionResult AddTodoList([FromBody] TodoListDto todoListDto)
        {
            var todoList = new TodoList();
            todoList.Title = todoListDto.Title;
            todoList.UserId = 1;

            _db.TodoLists.Add(todoList);
            _db.SaveChanges();

            return Ok();
        }

        [HttpPost]
        public IActionResult AddTodoItem([FromBody] TodoItemDto todoItemDto)
        {
            var todoItem = new TodoItem();
            todoItem.Priority = todoItemDto.Priority;
            todoItem.Status = todoItemDto.Status;
            todoItem.TodoListId = todoItemDto.TodoListId;
            todoItem.Name = todoItemDto.Name;
            todoItem.Description = todoItemDto.Description;
            _db.TodoItems.Add(todoItem);
            _db.SaveChanges();

            return Ok();
        }
    }
}
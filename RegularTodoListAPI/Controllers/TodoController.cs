using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using RegularTodoListAPI.DataContexts;
using RegularTodoListAPI.Dtos;
using RegularTodoListAPI.Models;

namespace RegularTodoListAPI.Controllers
{
    public class TodoController : ApiControllerBase
    {
        private readonly DataContext _db;
        private readonly IMapper _mapper;

        public TodoController(DataContext db, IMapper mapper)
        {
            _db = db;
            _mapper = mapper;
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
                    todoItemsDto.Add(_mapper.Map<TodoItemDto>(item));

                var list = _mapper.Map<TodoListDto>(todoList);
                list.TodoItems = todoItemsDto;
                res.Add(list);
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
                todoItemsDto.Add(_mapper.Map<TodoItemDto>(item));

            var res = _mapper.Map<TodoListDto>(todoList);
            res.TodoItems = todoItemsDto;

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
            var todoList = _mapper.Map<TodoList>(todoListDto);
            todoList.UserId = 1;

            _db.TodoLists.Add(todoList);
            _db.SaveChanges();

            return Ok();
        }

        [HttpPost]
        public IActionResult AddTodoItem([FromBody] TodoItemDto todoItemDto)
        {
            var todoItem = _mapper.Map<TodoItem>(todoItemDto);
            _db.TodoItems.Add(todoItem);
            _db.SaveChanges();

            return Ok();
        }

        [HttpDelete]
        public IActionResult DeleteTodoList([FromQuery] int todoListId)
        {
            var inDb = _db.TodoLists.FirstOrDefault(x => x.Id == todoListId);

            if(inDb != null)
            {
                _db.TodoLists.Remove(inDb);
                _db.SaveChanges();
            }

            return Ok();
        }

        [HttpDelete]
        public IActionResult DeleteTodoItem([FromQuery] int todoItemId)
        {
            var inDb = _db.TodoItems.FirstOrDefault(x => x.Id == todoItemId);

            if(inDb != null)
            {
                _db.TodoItems.Remove(inDb);
                _db.SaveChanges();
            }

            return Ok();
        }
    }
}
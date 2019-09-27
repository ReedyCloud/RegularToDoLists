using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RegularTodoListAPI.DataContexts;
using RegularTodoListAPI.Dtos;
using RegularTodoListAPI.Enums;
using RegularTodoListAPI.Models;

namespace RegularTodoListAPI.Controllers
{
    public class TodoController : ApiControllerBase
    {
        #region Consts, readonly, ctors
            
        private readonly DataContext _db;
        private readonly IMapper _mapper;

        public TodoController(DataContext db, IMapper mapper)
        {
            _db = db;
            _mapper = mapper;
        }

        #endregion

        #region TodoList
            
        [HttpGet]
        public async Task<IActionResult> GetTodoLists()
        {
            var todoLists = await _db.TodoLists.Where(x => x.UserId == 1).ToListAsync();

            var res = new List<TodoListDto>();
            foreach (var todoList in todoLists)
            {
                var currTodoItems = await _db.TodoItems.Where(x => x.TodoListId == todoList.Id).ToListAsync();
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
        public async Task<IActionResult> GetTodoList([FromQuery] int todoListId)
        {
            var todoList = await _db.TodoLists.FirstOrDefaultAsync(x => x.Id == todoListId);
            var currTodoItems = await _db.TodoItems.Where(x => x.TodoListId == todoList.Id).ToListAsync();
            var todoItemsDto = new List<TodoItemDto>();
            foreach (var item in currTodoItems)
                todoItemsDto.Add(_mapper.Map<TodoItemDto>(item));

            var res = _mapper.Map<TodoListDto>(todoList);
            res.TodoItems = todoItemsDto;

            return Ok(res);
        }

        [HttpPost]
        public async Task<IActionResult> AddTodoList([FromBody] TodoListDto todoListDto)
        {
            var todoList = _mapper.Map<TodoList>(todoListDto);
            todoList.UserId = 1;

            await _db.TodoLists.AddAsync(todoList);
            await _db.SaveChangesAsync();

            return Ok();
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteTodoList([FromQuery] int todoListId)
        {
            var inDb = await _db.TodoLists.FirstOrDefaultAsync(x => x.Id == todoListId);

            if(inDb != null)
            {
                _db.TodoLists.Remove(inDb);
                await _db.SaveChangesAsync();
            }

            return Ok();
        }

        #endregion

        #region TodoItem

        [HttpGet]
        public async Task<IActionResult> GetTodoItem([FromQuery] int todoItemId)
        {
            var res = await _db.TodoItems.FirstOrDefaultAsync(x => x.Id == todoItemId);

            return Ok(res);
        }
            
        [HttpPost]
        public async Task<IActionResult> AddTodoItem([FromBody] TodoItemDto todoItemDto)
        {
            var todoItem = _mapper.Map<TodoItem>(todoItemDto);
            await _db.TodoItems.AddAsync(todoItem);
            await _db.SaveChangesAsync();

            return Ok();
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteTodoItem([FromQuery] int todoItemId)
        {
            var inDb = await _db.TodoItems.FirstOrDefaultAsync(x => x.Id == todoItemId);

            if(inDb != null)
            {
                _db.TodoItems.Remove(inDb);
                await _db.SaveChangesAsync();
            }

            return Ok();
        }

        [HttpPut]
        public async Task<IActionResult> ChangeStatus(int todoItemId, TodoStatus status)
        {
            var inDb = await _db.TodoItems.FirstOrDefaultAsync(x => x.Id == todoItemId);

            if(inDb != null)
            {
                inDb.Status = status;
                await _db.SaveChangesAsync();
            }

            return Ok();
        }

        #endregion
    }
}
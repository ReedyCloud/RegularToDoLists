using System.Collections.Generic;

namespace RegularTodoListAPI.Dtos
{
    public class TodoListDto : IDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public List<TodoItemDto> TodoItems { get; set; }
    }
}
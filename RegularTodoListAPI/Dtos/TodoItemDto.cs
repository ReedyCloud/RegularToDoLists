using RegularTodoListAPI.Enums;

namespace RegularTodoListAPI.Dtos
{
    public class TodoItemDto : IDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Priority { get; set; }
        public TodoStatus Status { get; set; }
        public int TodoListId { get; set; }
        // public virtual TodoListDto TodoList { get; set; }
    }
}
namespace RegularTodoListAPI.Dtos
{
    public class TodoItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int StatusId { get; set; }
        public string Status { get; set; }
    }
}
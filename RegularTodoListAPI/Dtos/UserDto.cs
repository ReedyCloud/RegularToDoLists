using System;

namespace RegularTodoListAPI.Dtos
{
    public class UserDto : IDto
    {
        public int Id { get; set; }
        public string Email { get; set; }
    }
}
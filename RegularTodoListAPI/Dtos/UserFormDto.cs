using System.ComponentModel.DataAnnotations;

namespace RegularTodoListAPI.Dtos
{
    public class UserFormDto : IDto
    {
        [Required]
        [MinLength(3)]
        public string Email { get; set; }
        [Required]
        [MinLength(3)]
        public string Password { get; set; }
    }
}
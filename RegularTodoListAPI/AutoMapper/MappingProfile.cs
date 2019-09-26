using AutoMapper;
using RegularTodoListAPI.Dtos;
using RegularTodoListAPI.Models;

namespace RegularTodoListAPI.AutoMapper
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<TodoListDto, TodoList>();
            CreateMap<TodoList, TodoListDto>();
            CreateMap<TodoItemDto, TodoItem>();
            CreateMap<TodoItem, TodoItemDto>();
            CreateMap<User, UserDto>();
            CreateMap<UserDto, User>();
        }
    }
}
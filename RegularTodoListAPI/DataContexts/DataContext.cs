using Microsoft.EntityFrameworkCore;
using RegularTodoListAPI.Models;

namespace RegularTodoListAPI.DataContexts
{
    public class DataContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Pooling=true;Database=regulartodolistdb;Username=postgres;Password=qwedsa12");
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ForNpgsqlUseIdentityColumns();
        }
        
        public DbSet<TodoItem> TodoItems { get; set; }
        public DbSet<TodoList> TodoLists { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
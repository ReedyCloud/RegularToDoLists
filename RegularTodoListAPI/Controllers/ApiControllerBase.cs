using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace RegularTodoListAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    // [ServiceFilter(typeof(SessionUsage))]
    public class ApiControllerBase : ControllerBase
    {

    }
}
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Data;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly ApplicationDbContext dbContext;
        public EmployeeController(ApplicationDbContext dbContext) 
        {
        }
        [HttpGet]
        public IActionResult GetAllEmployees()
        {

        }
    }
}

using Microsoft.AspNetCore.Mvc;

namespace SpendingBot.Controllers
{
    [ApiController]
    [Route("/")]
    public class BotController : ControllerBase
    {
        [HttpGet]
        public string Get() => "Bot started!";

        [HttpPost]
        public async Task Post()
        {
            await 
        }
    }
}

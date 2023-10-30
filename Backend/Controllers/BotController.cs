using Microsoft.AspNetCore.Mvc;

namespace SpendingBot.Controllers
{
    [ApiController]
    [Route("/")]
    public class BotController : ControllerBase
    {
        [HttpGet]
        public string Get() => "Bot started!";

        [HttpGet("get-spendings")]
        public Dictionary<string, long> GetSpendings()
        {
            var data = new Dictionary<string, long>();

            data["Продукты"] = 550000;
            data["Транспорт"] = 95000;
            data["Жилье"] = 1000000;
            data["Развлечения"] = 1000000;
            data["Здоровье"] = 200000;
            data["Алкоголь"] = 25000;
            return data;
        }

        [HttpPost]
        public async Task Post()
        {
             
        }
    }
}

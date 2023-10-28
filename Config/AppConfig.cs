using Telegram.Bot;

namespace SpendingBot.Config
{
    public static class AppConfig
    {
        public static void BotConfigure(this IServiceCollection services, IConfiguration configuration)
        {
            //services.AddHttpClient<ITelegramBotClient, TelegramBotClient>(httpClient =>
            //{
            //    TelegramBotClientOptions options = new(configuration["BotToken"]);
            //    return new TelegramBotClient(options, httpClient);
            //});
            //.SetHandlerLifetime(TimeSpan.FromMinutes(5));

            services.AddSingleton<ITelegramBotClient, TelegramBotClient>();


        }

    }
}

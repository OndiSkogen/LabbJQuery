using System.IO;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Lernia.Controllers
{
    [Route("api")]
    public class ApiController : Controller
    {
        const string SEARCH_KEY = "a11698df-8e0f-4387-b2a2-26d8a511fac1";

        [Route("search/{term}")]
        public async Task Search([FromRoute] string term)
        {
            await Query($"https://api.resrobot.se/v2/location.name?key={SEARCH_KEY}&input={term}&format=json");
        }

        private async Task Query(string url)
        {
            using (var request = new HttpClient())
            {
                var stream = await request.GetStreamAsync(url);
                Response.ContentType = "application/json";
                await stream.CopyToAsync(Response.Body);
            }
        }
    }
}
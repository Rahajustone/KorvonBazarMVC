using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using KorvonBazar.Models;
using System.Diagnostics;
using KorvonBazar.MVC.Core;

namespace KorvonBazar.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IUnitOfWork unitOfWork;

        public HomeController(ILogger<HomeController> logger, IUnitOfWork unitOfWork)
        {
            _logger = logger;
            this.unitOfWork = unitOfWork;
        }

        public IActionResult Index()
        {
            var res = this.unitOfWork.User.GetAll();

            foreach (var item in res)
            {
                Console.WriteLine(item.ShopName);
            }
            return View();
        }

        [Authorize(Roles ="Admin")]
        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}

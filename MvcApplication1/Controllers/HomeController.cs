using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MvcApplication1.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Welcome to ASP.NET MVC!";

            return View();
        }

        public ActionResult About()
        {
            return PartialView();
        }


        public ActionResult AppOneIndex()
        {
            ViewBag.BaseHref = "AppOne";
            return View();
        }

        [OutputCache(Duration = 10)]
        public ActionResult AppOne()
        {
            return PartialView();
        }

        [OutputCache(Duration = 10)]
        public ActionResult AppOnePartTwo()
        {
            return PartialView();
        }

        public ActionResult AppTwoIndex()
        {
            ViewBag.BaseHref = "AppTwo";
            return View();
        }


        [OutputCache(Duration = 10)]
        public ActionResult AppTwo()
        {
            return PartialView();
        }

        [OutputCache(Duration = 10)]
        public ActionResult AppTwoPartTwo()
        {
            return PartialView();
        }
    }
}

using BloodDonationApp.DAL;
using BloodDonationApp.Models;
using BloodDonationApp.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace BloodDonationApp.Controllers
{
    public class HomeController : Controller
    {
        private DonatorDb db = new DonatorDb();
        
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Create(Donator donator)
        {
            //Donator donator = new Donator();
            db.Donator.Add(donator);
            db.SaveChanges();
            
            
            return RedirectToAction("Index");
        }

        public JsonResult GetDonarList()
        {
            using (DonatorDb contextObj = new DonatorDb())
            {
                var DonarList = contextObj.Donator.ToList();
                return Json(DonarList, JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult AdminPage()
        {
            return View();
        }
        [HttpGet]
        public ActionResult Login()
        {
            return View();
        }
        public ActionResult Login(Login user)
        {
            if (ModelState.IsValid)
            {
                var DonarList = db.Donator.ToList();
                foreach (var donar in DonarList)
                {
                    if (donar.Email == user.Email && donar.Password == user.Password)
                    {
                        FormsAuthentication.SetAuthCookie(donar.FullName, false);
                        return RedirectToAction("Index");
                    }
                }
                return View();
            }
            else
            {
                return View();
            }
            
        }

        [HttpPost]
        public bool IsEmailAlreadyExist(string Email)
        {
            var DonarList = db.Donator.ToList();
            foreach(var donar in DonarList){
                if (donar.Email == Email)
                {
                    return true;
                }
            }
            return false;
        }
    }
}
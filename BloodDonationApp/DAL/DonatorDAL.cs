using BloodDonationApp.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace BloodDonationApp.DAL
{
    public class DonatorDb:DbContext
    {
    //    public DonatorDb()
    //        : base("DonatorDb")
    //    {

    //}
        public DbSet<Donator> Donator { get; set; }
    }
}
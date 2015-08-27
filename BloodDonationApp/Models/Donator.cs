using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BloodDonationApp.Models
{
    public class Donator
    {
        public int DonatorId { get; set; }

        [Required]
        [StringLength(50, ErrorMessage = "Name can't be long more than 50 characters ")]
        [Display(Name = "Full Name : ")]
        public string FullName { get; set; }

        [Required]
        [Display(Name = "Blood Group : ")]
        public string BloodGroup { get; set; }


        [Required]
        [DataType(DataType.Date)]
        [Display(Name = "Date of Birth : ")]
        public DateTime DateOfBirth { get; set; }


        [Required]
        [DataType(DataType.PhoneNumber)]
        public string Phone { get; set; }


        [Required]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        [DataType(DataType.Date)]
        [Display(Name = "Last Donation Date : ")]
        public DateTime? LastDateOfDonation { get; set; }


        [Required]
        [StringLength(100, ErrorMessage = "Address can't be long more than 100 characters ")]
        [DataType(DataType.MultilineText)]
        public string Address { get; set; }


        [Required]
        [StringLength(20, ErrorMessage = "Password can't be long more than 20 characters ")]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}
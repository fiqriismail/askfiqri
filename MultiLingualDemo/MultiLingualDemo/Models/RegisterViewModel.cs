using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MultiLingualDemo.Models
{
    public class RegisterViewModel
    {
        [DisplayName("First name")]
        public string FirstName { get; set; }
        [Required(ErrorMessage = "You must enter a last name")]
        [DisplayName("Last name")]
        public string LastName { get; set; }
        [Required(ErrorMessage = "Please check your email address")]
        [DisplayName("Your email address")]
        public string Email { get; set; }

    }
}

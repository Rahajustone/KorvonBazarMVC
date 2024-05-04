using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace KorvonBazar.Areas.Identity.Data;

// Add profile data for application users by adding properties to the KorvonBazarUser class
public class KorvonBazarUser : IdentityUser
{
    //public string? RoleName {  get; set; }

    [Required]
    public required string FirstName { get; set; }

    [Required]
    public required string LastName { get; set; }

    [Required]
    public required string ShopName { get; set; }

    public string? ShopPicture { get; set; }

    [Required]
    public required string Address { get; set; }

    [Required]
    public required string BazarName { get; set; }

    [Required]
    public required string CityName { get; set; }

    [Required]
    public required string LineOfBussiness { get; set; }


    //[Required(ErrorMessage = "Password is required")]
    //[StringLength(255, ErrorMessage = "Must be between 5 and 255 characters", MinimumLength = 5)]
    //[DataType(DataType.Password)]
    //public required string Password { get; set; }

    //[Required(ErrorMessage = "Confirm Password is required")]
    //[StringLength(255, ErrorMessage = "Must be between 5 and 255 characters", MinimumLength = 5)]
    //[DataType(DataType.Password)]
    //[Compare("Password")]
    //public required string ConfirmPassword { get; set; }
}


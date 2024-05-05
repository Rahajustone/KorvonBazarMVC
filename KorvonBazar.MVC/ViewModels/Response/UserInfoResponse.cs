using System;
using System.ComponentModel.DataAnnotations;
using KorvonBazar.CustomFilters;

namespace KorvonBazar.MVC.ViewModels.Response;

public class UserInfoResponse
{
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public string? Email { get; set; }
    public string? PhoneNumber { get; set; }
    public string? ShopName { get; set; }
    public string? ShopPicture { get; set; }
    public string? Address { get; set; }
    public string? BazarName { get; set; }
    public string? CityName { get; set; }
    public string? LineOfBussiness { get; set; }
    public IList<string> Roles { get; set; }
}

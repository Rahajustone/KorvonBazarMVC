using System.ComponentModel.DataAnnotations;
using KorvonBazar.CustomFilters;

namespace KorvonBazar.ViewModels.Request;

public class RegisterShop
{

    [Required]
    public required string ShopName { get; set; }

    [AllowedExtensions(new string[] { ".jpg", ".jpeg", ".png" }, 1024*1014)]
    public IFormFile? ShopPicture { get; set; }

    [Required]
    public required string Address { get; set; }

    [Required]
    public required string BazarName { get; set; }

    [Required]
    public required string CityName { get; set; }

    [Required]
    public required string LineOfBussiness { get; set; }
}

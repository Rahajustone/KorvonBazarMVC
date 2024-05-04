using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using KorvonBazar.Core.Base;
using Microsoft.AspNetCore.Identity;

namespace KorvonBazar.Domain.Users;

[Table("Users")]
public partial class User : IdentityUser, IDeleteEntity, IAuditEntity
{

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

    public bool IsDeleted { get; set; }
    public DateTime CreatedDate { get; set; }
    public string? CreatedBy { get; set; }
    public DateTime? UpdatedDate { get; set; }
    public string? UpdatedBy { get; set; }
}

using System;
using System.ComponentModel.DataAnnotations;

namespace KorvonBazar.ViewModels.Request;

public class RegisterUser
{
	[Required]
	public required string FirstName { get; set; }

	[Required]
	public required string LastName { get; set; }

	[Required]
	[EmailAddress]
	public required string Email { get; set; }

	[Required]
	[DataType(DataType.PhoneNumber)]
	//[RegularExpression(@"^(\+\d{1, 2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$")]
	public string? PhoneNumber { get; set; }

	[Required(ErrorMessage = "Password is required")]
	[StringLength(255, ErrorMessage = "Must be between 5 and 255 characters", MinimumLength = 5)]
	[DataType(DataType.Password)]
	public required string Password { get; set; }

	[Required(ErrorMessage = "Confirm Password is required")]
	[StringLength(255, ErrorMessage = "Must be between 5 and 255 characters", MinimumLength = 5)]
	[DataType(DataType.Password)]
	[Compare("Password")]
	public required string ConfirmPassword { get; set; }
}


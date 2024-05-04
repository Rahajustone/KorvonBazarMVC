using System;
using System.ComponentModel.DataAnnotations;
using KorvonBazar.Extensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace KorvonBazar.CustomFilters;

public class AllowedExtensionsAttribute : ValidationAttribute
{
    private readonly string[] allowedExtensions;
    private readonly long maxSize=1024*1014;//1MB

    public AllowedExtensionsAttribute(string[] allowedExtensions)
    {
        this.allowedExtensions = allowedExtensions;
    }

    public AllowedExtensionsAttribute(string[] allowedExtensions, long maxSize)
    {
        this.allowedExtensions = allowedExtensions;
        this.maxSize = maxSize;
    }

    protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
    {
        //var file = (IFormFile)validationContext.ObjectInstance;
        var file = value as IFormFile;
        if (file != null)
        {
            var extension = Path.GetExtension(file.FileName);
            if (!allowedExtensions.Contains(extension.ToLower()))
                return new ValidationResult($"Your filetype {extension} is not valid. Please upload allowed {string.Join(",", allowedExtensions)}.");
            if (file.Length > maxSize)
                return new ValidationResult($"File size exceeds the maximum allowed size ({maxSize}).");
        }

        return ValidationResult.Success;
    }
}

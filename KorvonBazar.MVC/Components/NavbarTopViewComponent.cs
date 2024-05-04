using System;
using System.Security.Claims;
using Microsoft.AspNetCore.Mvc;

namespace KorvonBazar.Components;

public class NavbarTopViewComponent : ViewComponent
{
    private readonly IHttpContextAccessor _httpContextAccessor;

    public NavbarTopViewComponent(IHttpContextAccessor httpContextAccessor)
    {
        _httpContextAccessor = httpContextAccessor;
    }


    public async Task<IViewComponentResult> InvokeAsync()
    {

        string name = GetUserInfo();
        return View(name);
    }

    private string GetUserInfo()
    {
        var currentUserInfo = _httpContextAccessor.HttpContext.User.Identity.Name;

        return currentUserInfo;

    }
}


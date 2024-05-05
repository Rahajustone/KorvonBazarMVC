using System;
using System.Data;
using System.Security.Claims;
using AutoMapper;
using KorvonBazar.MVC.Core;
using KorvonBazar.MVC.Core.Domain;
using KorvonBazar.MVC.Services;
using KorvonBazar.MVC.ViewModels.Response;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.Web.CodeGenerators.Mvc.Templates.BlazorIdentity.Pages.Manage;

namespace KorvonBazar.Components;

public class NavbarTopViewComponent : ViewComponent
{
    private readonly IHttpContextAccessor _httpContextAccessor;
    //private readonly IUnitOfWork _uow;
    //private readonly IMapper _mapper;
    private UserManager<User> _userManager;
    private RoleManager<IdentityRole> _roleManager;
    private readonly ICatcheService _catcheService;

    public NavbarTopViewComponent(IHttpContextAccessor httpContextAccessor,
            UserManager<User> userManager,
            RoleManager<IdentityRole> roleManager,
            ICatcheService catcheService)
    {
        _httpContextAccessor = httpContextAccessor;
        _userManager = userManager;
        _roleManager = roleManager;
        _catcheService = catcheService;
    }

    public async Task<IViewComponentResult> InvokeAsync()
    {
        var user = await GetUserInfo();
        return View(user);
    }

    private async Task<UserInfoResponse> GetUserInfo()
    {
        var userEmailId = _httpContextAccessor.HttpContext.User.Identity.Name ?? throw new Exception("Navbar Top view exception. User must ber logged in.");

        // check cachec data

        var cacheData = _catcheService.GetData<UserInfoResponse>(userEmailId.ToUpper());

        if(cacheData != null)
            return cacheData;

        var userInfo = await _userManager.FindByEmailAsync(userEmailId.ToUpper());
        var userRoles = await _userManager.GetRolesAsync(userInfo);

        var user = new UserInfoResponse
        {
            FirstName = userInfo.FirstName,
            LastName = userInfo.LastName,
            Email = userInfo.Email,
            PhoneNumber = userInfo.PhoneNumber,
            ShopName = userInfo.ShopName,
            ShopPicture = userInfo.ShopPicture,
            Address = userInfo.Address,
            BazarName = userInfo.BazarName,
            CityName = userInfo.CityName,
            LineOfBussiness = userInfo.LineOfBussiness,
            Roles = userRoles
         };

        var expiryTime = DateTimeOffset.Now.AddDays(30);
        _catcheService.SetData<UserInfoResponse>(userInfo.Email.ToUpper(), user, expiryTime);

        return user;
    }
}

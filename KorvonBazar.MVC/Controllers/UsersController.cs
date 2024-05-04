using System;
using System.Security.Claims;
using System.Text;
using System.Text.Encodings.Web;
using KorvonBazar.MVC.Core.Domain;
using KorvonBazar.Services;
using KorvonBazar.ViewModels;
using KorvonBazar.ViewModels.Request;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Rewrite;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.VisualStudio.Web.CodeGenerators.Mvc.Templates.BlazorIdentity.Pages.Manage;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace KorvonBazar.Controllers
{
	public class UsersController : Controller
	{
        private readonly SignInManager<User> _signInManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly UserManager<User> _userManager;
        private readonly IUserStore<User> _userStore;
        private readonly IFileUploaderHandler _fileUploaderHandler;
        private readonly IUserEmailStore<User> _emailStore;
        private readonly IEmailSender _emailSender;
        private readonly ILogger<Login> _logger;
        //public string ReturnUrl { get; set; }

        public UsersController(
            SignInManager<User> signInManager,
            UserManager<User> userManager,
            IUserStore<User> userStore,
            IFileUploaderHandler fileUploaderHandler,
            RoleManager<IdentityRole> roleManager,
            IEmailSender emailSender,
            ILogger<Login> logger
        )
        {
            _signInManager = signInManager;
            _userManager = userManager;
            _userStore = userStore;
            _fileUploaderHandler = fileUploaderHandler;
            _roleManager = roleManager;
            _emailSender = emailSender;
            _emailStore = GetEmailStore();
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Login([FromForm] Login Input)
        {
            if (ModelState.IsValid)
            {
                // This doesn't count login failures towards account lockout
                // To enable password failures to trigger account lockout, set lockoutOnFailure: true
                var result = await _signInManager.PasswordSignInAsync(Input.Email, Input.Password, Input.RememberMe, lockoutOnFailure: false);
                if (result.Succeeded)
                {
                    _logger.LogInformation("User logged in.");
                    return RedirectToAction("Index", "Home");
                }
                //if (result.RequiresTwoFactor)
                //{
                //    return RedirectToPage("./LoginWith2fa", new { ReturnUrl = returnUrl, RememberMe = Input.RememberMe });
                //}
                //if (result.IsLockedOut)
                //{
                //    _logger.LogWarning("User account locked out.");
                //    return RedirectToPage("./Lockout");
                //}
            }

            ModelState.AddModelError(string.Empty, "Invalid login attempt.");

            return View();
        }

        [HttpGet]
        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Register([FromForm] RegisterUserAndShop Input)
        {
            if (!ModelState.IsValid)
                return View();

            var toUpperCase = Input.User.Email.ToUpper();
            var userExist = await _userManager.FindByEmailAsync(toUpperCase);
            if (userExist != null)
            {
                ModelState.AddModelError(string.Empty, "Users already existed");

                return View();
            }

            try
            {
                var user = CreateUser();
                user.FirstName = Input.User.FirstName;
                user.LastName = Input.User.LastName;
                user.ShopName = Input.Shop.ShopName;
                user.Address = Input.Shop.Address;
                user.CityName = Input.Shop.Address;
                user.BazarName = Input.Shop.BazarName;
                user.LineOfBussiness = Input.Shop.LineOfBussiness;
                user.Email = Input.User.Email;
                user.EmailConfirmed = true; // confirm for now

                if (Input.Shop.ShopPicture != null)
                {
                    var newFileName = await _fileUploaderHandler.SaveFileAsync(Input.Shop.ShopPicture, "photo");
                    user.ShopPicture = newFileName;
                }

                await _userStore.SetUserNameAsync(user, Input.User.Email, CancellationToken.None);
                var result = await _userManager.CreateAsync(user, Input.User.Password);

                string defaultRole = "BussinesOwner";
                await AddDefaultRoleAsync(defaultRole);

                if (result.Succeeded)
                {
                    _logger.LogInformation("User created a new account with password.");
                    _ = await _userManager.AddToRoleAsync(user, defaultRole);

                    return RedirectToAction("Index", "Home");
                }

                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError(string.Empty, error.Description);
                }
            }
            catch (Exception ex)
            {

                ModelState.AddModelError(string.Empty, ex.Message);
                return View();
            }

            return View();
        }

        private async Task AddDefaultRoleAsync(string defaultRole)
        {
            var roleResult = await _roleManager.FindByNameAsync(defaultRole);
            if (roleResult == null)
            {
                roleResult = new IdentityRole(defaultRole);
                await _roleManager.CreateAsync(roleResult);
            }

            var roleClaimList = (await _roleManager.GetClaimsAsync(roleResult)).Select(p => p.Type);
            if (!roleClaimList.Contains("CanView"))
            {
                await _roleManager.AddClaimAsync(roleResult, new Claim("CanView", "true"));
            }
        }

        private User CreateUser()
        {
            try
            {
                return Activator.CreateInstance<User>();
            }
            catch
            {
                throw new InvalidOperationException($"Can't create an instance of '{nameof(User)}'. " +
                    $"Ensure that '{nameof(User)}' is not an abstract class and has a parameterless constructor, or alternatively " +
                    $"override the register page in /Areas/Identity/Pages/Account/Register.cshtml");
            }
        }

        private IUserEmailStore<User> GetEmailStore()
        {
            if (!_userManager.SupportsUserEmail)
            {
                throw new NotSupportedException("The default UI requires a user store with email support.");
            }
            return (IUserEmailStore<User>)_userStore;
        }
    }
}


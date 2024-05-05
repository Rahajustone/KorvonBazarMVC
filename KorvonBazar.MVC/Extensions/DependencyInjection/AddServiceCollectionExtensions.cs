using System;
using KorvonBazar.MVC.Core;
using KorvonBazar.MVC.Core.Domain;
using KorvonBazar.MVC.Core.Repositories;
using KorvonBazar.MVC.Persistence;
using KorvonBazar.MVC.Persistence.Repositories;
using KorvonBazar.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace KorvonBazar.MVC.Extensions.DependencyInjection
{
	public static class AddServiceCollectionExtensions
	{
        public static IServiceCollection AddDbContextServices(this IServiceCollection services, string connectionString)
        {
            services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(connectionString));

            services.AddDefaultIdentity<User>(options => options.SignIn.RequireConfirmedAccount = true)
                .AddRoles<IdentityRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>();

            return services;
        }

        public static IServiceCollection AddConfiguration(this IServiceCollection services)
        {
            services.Configure<IdentityOptions>(options =>
            {
                // Password settings.
                options.Password.RequireDigit = true;
                options.Password.RequireLowercase = true;
                options.Password.RequireNonAlphanumeric = true;
                options.Password.RequireUppercase = true;
                options.Password.RequiredLength = 6;
                options.Password.RequiredUniqueChars = 1;

                // Lockout settings.
                options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(5);
                options.Lockout.MaxFailedAccessAttempts = 5;
                options.Lockout.AllowedForNewUsers = true;

                // User settings.
                options.User.AllowedUserNameCharacters =
                "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._@+";
                options.User.RequireUniqueEmail = false;
            });

            services.ConfigureApplicationCookie(options =>
            {
                // Cookie settings
                options.Cookie.HttpOnly = true;
                options.ExpireTimeSpan = TimeSpan.FromMinutes(5);

                options.LoginPath = "/Users/Login";
                options.AccessDeniedPath = "/Identity/Account/AccessDenied";
                options.SlidingExpiration = true;
            });

            return services;
        }

        public static IServiceCollection AddApplicationServices(this IServiceCollection services)
        {
            services.AddScoped<IFileUploaderHandler, FileUploaderHandler>();
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            services.AddScoped<IUserRepository, UserRepository>();

            return services;
        }
    }
}

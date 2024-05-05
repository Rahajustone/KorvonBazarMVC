using Microsoft.EntityFrameworkCore;
using KorvonBazar.MVC.Extensions.DependencyInjection;
using System.Configuration;
using KorvonBazar.MVC.Services;
using StackExchange.Redis;

var builder = WebApplication.CreateBuilder(args);
var connectionString = builder.Configuration.GetConnectionString("KorvonBazarContextConnection") ?? throw new InvalidOperationException("Connection string 'KorvonBazarContextConnection' not found.");

builder.Services.AddDbContextServices(connectionString);
builder.Services.AddConfiguration();
builder.Services.AddApplicationServices();
builder.Services.AddAutoMapper(typeof(Program));
builder.Services.AddStackExchangeRedisCache(options =>
{
    options.Configuration = builder.Configuration.GetConnectionString("Redis");
    options.InstanceName = "localRedis_";
});

builder.Services.AddScoped<ICatcheService, CatcheService>();
// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddHttpContextAccessor();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");
app.MapRazorPages();

app.Run();

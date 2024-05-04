using System;
using System.Drawing;
using System.Runtime.CompilerServices;
using Microsoft.AspNetCore.Mvc;

namespace KorvonBazar.Components
{
	public class CustomMenu
    {
        public string Text;
        public string URL;
        public bool IsSelected;
        public bool IsBold;
    }

	public class LeftSideBarMenuViewComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync(int selectedMenuIndex, bool isBold)
        {
            List<CustomMenu> menus = new List<CustomMenu>(){
                new CustomMenu() { Text="Home", URL="/", IsSelected = selectedMenuIndex==0, IsBold=isBold },
                new CustomMenu() { Text="Service", URL="/services", IsSelected = selectedMenuIndex==1, IsBold=isBold },
                new CustomMenu() { Text="About", URL="/about", IsSelected = selectedMenuIndex==2, IsBold=isBold },
                new CustomMenu() { Text="Privacy", URL="/privacy", IsSelected = selectedMenuIndex==3, IsBold=isBold },

            };

            return View(menus);
        }
    }
}

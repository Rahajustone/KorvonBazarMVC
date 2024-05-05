using System;
using AutoMapper;
using KorvonBazar.MVC.Core.Domain;
using KorvonBazar.MVC.ViewModels.Response;

namespace KorvonBazar.MVC.AutoMapper;

public class UserProfile : Profile
{
	public UserProfile()
	{
		CreateMap<User, UserInfoResponse>();
	}
}


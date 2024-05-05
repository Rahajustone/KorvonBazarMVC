using System;
namespace KorvonBazar.MVC.Services
{
	public interface ICatcheService
	{
		T GetData<T>(string k);
		bool SetData<T>(string key, T value, DateTimeOffset expirationTIme);
		object RemoveData(string key);
	}
}

using System;
using System.Text.Json;
using StackExchange.Redis;

namespace KorvonBazar.MVC.Services
{
	public class CatcheService: ICatcheService
    {
        private IDatabase _cacheDb;

        public CatcheService(IConfiguration config)
		{;
            var redis = ConnectionMultiplexer.Connect(config.GetConnectionString("Redis"));
            _cacheDb = redis.GetDatabase();
		}

        public T GetData<T>(string key)
        {
            var value = _cacheDb.StringGet(key);
            if (!string.IsNullOrEmpty(value))
                return JsonSerializer.Deserialize<T>(value);

            return default;
        }

        public object RemoveData(string key)
        {
            var isExist = _cacheDb.KeyExists(key);
            if (isExist)
                return _cacheDb.KeyDelete(key);

            return false;
        }

        public bool SetData<T>(string key, T value, DateTimeOffset expirationTIme)
        {
            var expirtyTime = expirationTIme.DateTime.Subtract(DateTime.Now);
            var isSet = _cacheDb.StringSet(key, JsonSerializer.Serialize(value), expirtyTime);

            return isSet;
        }
    }
}


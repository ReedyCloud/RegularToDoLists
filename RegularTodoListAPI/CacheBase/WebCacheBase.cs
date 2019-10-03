using System;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using Core.Cache.Enums;
using Microsoft.Extensions.Caching.Distributed;

namespace Core.Cache
{
    public class WebCacheBase
    {
        #region Consts & Readonly fields

        private readonly IDistributedCache _distributedCache;
        private readonly BinaryFormatter _binaryFormatter;

        #endregion

        #region Constructors

        public WebCacheBase(IDistributedCache distributedCache)
        {
            _distributedCache = distributedCache;
            _binaryFormatter = new BinaryFormatter();
        }

        #endregion

        #region Interface implementations

        public T GetCacheItem<T>(string key)
        {
            var cacheItem = _distributedCache.Get(key);
            if (cacheItem == null)
                return default(T);

            object res;
            using (MemoryStream ms = new MemoryStream(cacheItem))
            {
                res = _binaryFormatter.Deserialize(ms);
            }

            return (T)res;
        }

        public void SetCacheItem<T>(T item, string key, CacheTime cacheTime)
        {
            if (cacheTime <= 0 || key.Trim() == string.Empty)
                throw new Exception(nameof(cacheTime) + " must be > 0 and " + nameof(key) + " can't be empty.");

            var cacheEntryOptions = new DistributedCacheEntryOptions()
                .SetAbsoluteExpiration(TimeSpan.FromMinutes((int)cacheTime));

            byte[] obj;
            using (MemoryStream ms = new MemoryStream())
            {
                _binaryFormatter.Serialize(ms, item);
                obj = ms.ToArray();
            }

            _distributedCache.Set(key, obj, cacheEntryOptions);
        }

        public bool HasCacheItem(string key)
        {
            return _distributedCache.Get(key) != null;
        }

        #endregion
    }
}
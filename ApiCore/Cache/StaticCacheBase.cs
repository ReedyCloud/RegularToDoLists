using System;
using System.Collections.Concurrent;
using System.Collections.Generic;

namespace Core.Cache
{
   public class StaticCacheBase
    {
        #region Constructor

        public StaticCacheBase()
        {

        }

        #endregion

        #region Attributes

        private static ConcurrentDictionary<string, object> _cacheData
            = new ConcurrentDictionary<string, object>();
        private static ConcurrentDictionary<string, object> _lockObjects
            = new ConcurrentDictionary<string, object>();

        #endregion

        #region Cache Handling

        protected object GetValue(string cacheKey)
        {
            object res;
            _cacheData.TryGetValue(cacheKey, out res);
            return res;
        }

        protected T GetValue<T>(string key)
        {
            T res = default(T);
            object value = GetValue(key);

            if (value != null)
                res = (T)value;

            return res;
        }

        protected void SetValue(string cacheKey, object value)
        {
            if (!_cacheData.ContainsKey(cacheKey))
                _cacheData.TryAdd(cacheKey, value);
        }

        protected void UpdateValue(string cacheKey, object value)
        {
            _cacheData.AddOrUpdate(cacheKey, value, (key, oldValue) => value);
        }

        private object GetLockObject(string cacheKey)
        {
            return _lockObjects.GetOrAdd(cacheKey, ck => new object());
        }

        /// <summary>
        /// Gets value from cache using a lock. 
        /// If the value is not found it is first created with the resultCreator delegate and then written to cache
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="cacheKey"></param>
        /// <param name="resultCreator">Creates the result only if it was not found in cache</param>
        /// <returns></returns>
        protected internal T GetValueWithLock<T>(string cacheKey, Func<T> resultCreator)
        {
            T res = default(T);
            object o = GetValue(cacheKey);

            if (o == null)
            {
                object lockObject = GetLockObject(cacheKey);

                lock (lockObject)
                {
                    if ((o = GetValue(cacheKey)) == null)
                    {
                        res = resultCreator();

                        if (res != null)
                            SetValue(cacheKey, res);
                    }
                    else
                        res = (T)o;
                }
            }
            else
                res = (T)o;

            return res;
        }

        public void ClearCache()
        {
            _cacheData.Clear();
        }

        public void ClearCacheByKey(string key)
        {
            if (!String.IsNullOrWhiteSpace(key))
            {
                object outValue = null;
                _cacheData.TryRemove(key, out outValue);
            }
        }

        public int ClearCacheByKeyPrefix(string keyPrefix)
        {
            ConcurrentDictionary<string, object> staticCacheContent = _cacheData;
            List<string> clonedKeys = new List<string>(staticCacheContent.Keys);
            object value = null;
            int count = 0;

            foreach (string key in clonedKeys)
                if (key.StartsWith(keyPrefix, StringComparison.OrdinalIgnoreCase))
                    if (staticCacheContent.TryRemove(key, out value))
                        count++;

            return count;
        }

        #endregion
    }
}
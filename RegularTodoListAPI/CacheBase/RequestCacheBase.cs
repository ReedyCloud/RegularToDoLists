using System.Collections.Generic;
using System.Linq;

namespace Core.Cache
{
    public class RequestCacheBase
    {
        private Dictionary<string, object> _requestCacheItems 
            = new Dictionary<string, object>();

        internal const string DYNAMIC_PREFIX = "@dynamic-";

        #region Main methods

        public T GetCacheItem<T>(string key)
        {
            if (_requestCacheItems.ContainsKey(key))
                return (T)_requestCacheItems[key];
            else
                return default(T);
        }

        public bool HasCacheItem(string key)
        {
            return _requestCacheItems.ContainsKey(key);
        }

        public void SetCacheItem<T>(T item, string key)
        {
            if (_requestCacheItems.ContainsKey(key))
                _requestCacheItems[key] = item;
            else
                _requestCacheItems.Add(key, item);
        }

        internal void RegisterDynamicItem<T>(T item, string key)
        {
            SetCacheItem(item, $"{ DYNAMIC_PREFIX }{ key }");
        }

        internal T GetDynamicItem<T>(string key)
        {
            return GetCacheItem<T>($"{ DYNAMIC_PREFIX }{ key }");
        }

        internal List<KeyValuePair<string, object>> GetDynamicItems()
        {
            return _requestCacheItems
                .Where(x => x.Key.StartsWith(DYNAMIC_PREFIX))
                .ToList();
        }

        #endregion
    }
}
using System;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using Microsoft.AspNetCore.Http;

namespace Core.Cache
{
    public class SessionCacheBase
    {

        #region Consts & Readonly fields

        private readonly ISession _session;
        private readonly RequestCacheBase _requestCache;
        private readonly BinaryFormatter _binaryFormatter;

        #endregion

        #region Constructors

        public SessionCacheBase(ISession session, RequestCacheBase requestCache)
        {
            _session = session;
            _requestCache = requestCache;
            _binaryFormatter = new BinaryFormatter();
        }

        #endregion

        protected T GetFromSession<T>(string key)
        {
            object res = _requestCache.GetDynamicItem<T>(key);
            if (res != null)
                return (T)res;

            if (_session.TryGetValue(key, out byte[] value))
            {
                using (MemoryStream ms = new MemoryStream(value))
                {
                    res = _binaryFormatter.Deserialize(ms);
                }
            }
            else
                res = Activator.CreateInstance<T>();

            _requestCache.RegisterDynamicItem((T)res, key);

            return (T)res;
        }

        protected void Set<T>(T item, string key)
        {
            byte[] obj;

            using(MemoryStream ms = new MemoryStream())
            {
                _binaryFormatter.Serialize(ms, item);
                obj = ms.ToArray();
            }

            _session.Set(key, obj);
        }

        public void SaveSessionItems()
        {
            var itemsUsed = _requestCache.GetDynamicItems();

            foreach (var item in itemsUsed)
                Set(item.Value, item.Key.Replace(RequestCacheBase.DYNAMIC_PREFIX, string.Empty));
        }
    }
}
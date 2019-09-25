using System.Collections.Generic;
using System.Text;
using Core.Cache;
using Microsoft.Extensions.Caching.Distributed;

namespace RegularTodoListAPI.Cache
{
    public class WebCache : WebCacheBase
    {
        #region Consts & Readonly fields

        #endregion

        #region Constructors

        public WebCache(IDistributedCache distributedCache)
            : base(distributedCache)
        {

        }

        #endregion

        #region Classes

        public class CacheKeyBuilder
        {
            public CacheKeyBuilder()
            {
                _sb = new StringBuilder();
            }

            private StringBuilder _sb;

            public void AppendWithFDS(string keyChunk)
            {
                _sb.Append($"*{keyChunk}");
            }

            public void AppendWithFDS(int keyChunk)
            {
                AppendWithFDS(keyChunk.ToString());
            }

            public void AppendWithFDS(bool keyChunk)
            {
                AppendWithFDS(keyChunk.ToString());
            }

            public void AppendWithFDS(object keyChunk)
            {
                AppendWithFDS(keyChunk?.ToString());
            }

            public void AppendWithFDS<T>(IEnumerable<T> keyChunks)
            {
                AppendWithFDS(string.Join(string.Empty, keyChunks));
            }

            public string GetKey()
            {
                return _sb.ToString();
            }

            public override string ToString()
            {
                return GetKey();
            }
        }

        #endregion
    }
}
(function(global, $) {
    // 项目公共逻辑一般分为如下几个模块, 为方便简单使用, 我们将其挂在全局 window 下面
    // * 公共配置
    // * 工具方法
    // * 项目中公共出来的模块

    // global.myapp 中的"myapp"可以根据项目名称取一个更独特的名字
    var app = global.myapp = {};

    // 公共配置
    app.config = {
        cdnRoot: 'http://cdn.com',
        apiRoot: ''
    };

    // 工具方法
    app.util = {
        /**
         * 获取 URL querystring 中的参数值
         * 
         * @param name {string} 参数名
         * @param querystring {string} 提供要解析的 querystring, 没有提供则使用当前 URL 中的querystring
         * @return {string | object} 如果传入了参数名则获取指定的参数值, 否则返回一个包含了所有参数的对象
         */
        getQueryStringValue: function(name, querystring) {
            var querystring = querystring || location.search;
            var param = {};

            if (querystring) {
                querystring = querystring.replace(/^\?/, '');
                var kvs = querystring.split('&');

                kvs.reduce(function(previousValue, kv, index, array) {
                    var kvp = kv.split('=');
                    previousValue[kvp[0]] = decodeURIComponent(kvp[1]);

                    return previousValue;
                }, param);
            }

            if (name) {
                return param[name];
            } else {
                return param;
            }
        },
        /**
         * 根据浏览器的 User Agent 来设置不同的 class, 一般用于判断当前运行的环境来做特殊处理.
         * 例如在微信浏览器中要隐藏某个按钮, 在自己的 APP 中又要显示某个按钮, 或者执行特殊的逻辑.
         * 
         * @return {object} 各种浏览器的 boolean 判断
         */
        browser: (function() {
            var ua = window.navigator.userAgent;
            var browser = {};

            if (ua.match(/MicroMessenger/i)) {
                browser.wechat = true;
                document.documentElement.classList.add('in-wechat');
            } else if (ua.match(/MyAppUA/i)) {
                browser.myapp = true;
                document.documentElement.classList.add('in-app');
            } else {
                browser.mobile = true;
            }

            return browser;
        })()
    };

    // 项目中公共出来的模块
    // 加载顶部导航
    app.loadNav = function() {
        
    };
    // 加载底部导航
    app.loadFooter = function() {
        
    };
})(window, jQuery);

// 统计(例如百度统计)
var _hmt = _hmt || [];
(function() {
var hm = document.createElement("script");
hm.src = "//hm.baidu.com/hm.js?你的统计ID";
var s = document.getElementsByTagName("script")[0]; 
s.parentNode.insertBefore(hm, s);
})();
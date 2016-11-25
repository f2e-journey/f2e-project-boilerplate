define(function(require, exports, module) {
    var $ = require('../lib/vendor/jquery.js');
    // 需要改造下 bootstrap.js 为标准模块
    require('../lib/vendor/bootstrap/js/bootstrap.js');
    var app = require('../lib/app/app.js');

    console.log('jquery', $.fn.jquery);

    console.log('index.js');

    // 使用模块化开发后, 打包出来的文件一般包含
    // 1. coolie.js        -- 模块加载器
    // 2. module-config.js -- 模块加载器配置
    // 3. index/index.js   -- 入口模块
    // 4. chunk 模块(如果有配置的话)
});
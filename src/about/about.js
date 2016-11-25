define(function(require, exports, module) {
    var $ = require('../lib/vendor/jquery.js');
    // 需要改造下 bootstrap.js 为标准模块
    require('../lib/vendor/bootstrap/js/bootstrap.js');
    var app = require('../lib/app/app.js');

    // [模块类型](https://coolie.ydr.me/introduction/module-type/)
    // require('./some.css', 'css|style');
    var img = require('../lib/app/res/award.png', 'file');

    console.log('about.js');
    console.log(img);

    $('.jumbotron').append('<p>动态加载资源 <img src="' + img + '"></p>');
});
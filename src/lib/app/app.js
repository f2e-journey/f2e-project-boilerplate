define(function(require, exports, module) {
    var $ = require('../vendor/jquery.js');

    console.log('app.js');

    function initSiteNav() {
        var path = window.location.pathname;
        var navMap = {
            '/': 0,
            '/index.html': 0,
            '/about/about.html': 1
        };
        $('.app__header .nav > li').eq(navMap[path]).addClass('active');
    }

    initSiteNav();
});
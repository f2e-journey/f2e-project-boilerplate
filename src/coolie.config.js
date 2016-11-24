/**
 * ======================================================
 * coolie-cli 配置文件 `coolie.config.js`
 * 使用 `coolie init -c` 生成 `coolie.config.js` 文件模板
 * 当前配置文件所在的目录为构建的根目录
 *
 * @link http://coolie.ydr.me/guide/coolie.config.js/
 * @author ydr.me
 * @version 1.10.7
 * =======================================================
 */

'use strict';

// 构建到哪个目录
var distDir = '../dist/';
// 静态资源放在哪个目录, 相对于 dest.dirname
var staticDir = './static';

module.exports = function (coolie) {
    // coolie 配置
    coolie.config({
        // 是否在构建之前清空目标目录
        clean: true,

        // 目标配置
        dest: {
            // 目标目录，相对于当前文件
            dirname: distDir,
            // 目标根域
            // host: '//cdn.domain.com/',
            // 版本号长度
            // 为什么是 7 位, 参考 github 的 commit hash 的显示方式, 例如: Latest commit 2aa0087  5 days ago
            versionLength: 7
        },

        // js 构建
        js: {
            // 入口模块，相对于当前文件
            // main: [
            //     // 支持 glob 语法
            //     'index/index.js'
            // ],
            // coolie-config.js 路径，相对于当前文件
            // 'coolie-config.js': 'module-config.js',
            // js 文件保存目录，相对于 dest.dirname
            dest: staticDir + '/js/',
            // 分块配置
            // chunk: [],
            // js 压缩配置
            minify: {
                global_defs: {
                    DEBUG: false,
                    drop_console: true
                    // compress: {
                    // }
                }
            }
        },

        // html 构建
        html: {
            // html 文件，相对于当前文件
            src: [
                // 支持 glob 语法
                '**/*.html',
                '!lib/app/partial/*.html'
            ],
            // html 压缩配置
            minify: true
        },

        // css 构建
        css: {
            // css 文件保存目录，相对于 dest.dirname
            dest: staticDir + '/css/',
            // css 压缩配置
            minify: true
        },

        // 资源
        resource: {
            // 资源保存目录，相对于 dest.dirname
            dest: staticDir + '/res/',
            // 是否压缩
            minify: true
        },

        // 原样复制文件，相对于当前文件
        copy: [
            // 支持 glob 语法
            './favicon.ico',
            './robots.txt'
        ]
    });

    // 使用 coolie 中间件
    // coolie.use(require('coolie-*'));

    // 自定义 coolie 中间件
    //coolie.use(function (options) {
    //    // do sth.
    //    return options;
    //});
};
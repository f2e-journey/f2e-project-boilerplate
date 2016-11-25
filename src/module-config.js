/**
 * ======================================================
 * coolie.js 模块加载器配置文件 `coolie-config.js`
 * 使用 `coolie init -j` 生成 `coolie-config.js` 文件模板
 * 前端模块加载器配置文件
 *
 * @link http://coolie.ydr.me/guide/coolie-config.js/
 * @author ufologist
 * @version 1.10.7
 * ======================================================
 */
coolie.config({
    // coolie.js@1.3.5 以前的版本打包之前会在 console 中输出加载了哪些模块
    // 例如
    // coolie modules [1.3.4]
    //     http://localhost:8000/index/index.js
    //     http://localhost:8000/lib/vendor/jquery.js
    //     http://localhost:8000/lib/vendor/bootstrap/js/bootstrap.js
    //     http://localhost:8000/lib/app/app.js
    //     past 54ms

    // 入口模块基准路径，相对于当前文件
    base: '.'
}).use();
/*!
 * my jQuery JavaScript Library v0.0.1
 *
 * Date: 2019-11-07
 */
(function () {

    // 创建 $ jQuery 函数
    const $ = function (selector) {
        // 内部封装变得复杂了，但是对于用户使用来说变得简单了，通过 $() 就可以创建实例
        return new Init(selector);
    }

    // 通过给 window 对象添加 $ 属性，让内部的 $ 地址添加到 window 对象上
    window.$ = window.jQuery = $;

    // 构造函数
    const Init = function (selector) {
        // 先给实例对象添加 selector 选择器属性，记录起来而已
        this.selector = selector;

        // 通过选择器查找到所有 dom 元素
        const doms = document.querySelectorAll(selector);

        // 先给实例对象添加 length 长度属性
        this.length = doms.length;

        // 先把外面的 this 的内存地址先存起来
        const that = this;

        // 遍历所有的 dom
        doms.forEach(function (item, index) {
            that[index] = item;
        });

    }

    // 原型上添加方法
    Init.prototype.addClass = function (className) {

    }
})()
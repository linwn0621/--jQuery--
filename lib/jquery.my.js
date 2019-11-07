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
    // 添加类
    Init.prototype.addClass = function (className) {
        // 传递数据：
        // 形参：className 接收传递的实参
        // this：调用的对象会自动传过来，把内存地址给 this
        // 遍历过程 - 隐式迭代核心
        Array.from(this).forEach(function (item) {
            item.classList.add(className);
        });
        // return this  - 链式编程核心
        return this;
    }

    // 删除类
    Init.prototype.removeClass = function (className) {
        // 遍历过程 - 隐式迭代核心
        Array.from(this).forEach(function (item) {
            item.classList.remove(className);
        });
        // return this  - 链式编程核心
        return this;
    }

    Init.prototype.toggleClass = function (className) {
        // 遍历过程 - 隐式迭代核心
        Array.from(this).forEach(function (item) {
            item.classList.toggle(className);
        })
        // return this  - 链式编程核心
        return this;
    }


    // 高阶函数 - 1. 把函数作为参数进行传递
    Init.prototype.each = function (fn) {
        // console.log(fn);
        // fn();
        for (let i = 0; i < this.length; i++) {
            fn(i, this[i]);
        }
    }

})()
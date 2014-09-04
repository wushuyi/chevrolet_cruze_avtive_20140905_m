//resizeFn
var resizeFn = {
    prevMain: function () {
        var _windowHeight = window.innerHeight != null ? window.innerHeight : $(window).height();
        $("#main").height(_windowHeight + 500);
        $("#container").height(_windowHeight + 200);
        if (isBrowse().chrome) {
        } else {
            $(window).scrollTop(1);
        }
    },
    initDom: function () {
        var _windowHeight = window.innerHeight != null ? window.innerHeight : $(window).height();
        var winVisiH = _windowHeight - $("#head").height(); //重置成新高度
        $("#main").height(winVisiH);
        $("#container").height(_windowHeight);
        $("#contentCar").height(winVisiH);
    }
};
/*
 左右切换
 */
var malibuKV = inherit(cmnKVfn);        //把固定对象转移到别的变量上

$(function () {
    document.addEventListener('touchmove', function (e) {
        e.preventDefault();
    }, false);
    window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", orientationChange, false);
    //视频播放
    navSwitch.bindEvent();

    $(window).bind({
        "load": function () {
            resizeFn.prevMain();
            resizeFn.initDom();
            if ($("#car_kv").length > 0) {
                malibuKV.init({
                    kvUL: "#car_kv .ulPic",
                    kvLI: "#car_kv .ulPic li",
                    switchUL: "#car_kv .ulSwitch",
                    switchLI: "#car_kv .ulSwitch li"
                });
            }
            jackyFn.loadingFn("no");
        }
    });
});
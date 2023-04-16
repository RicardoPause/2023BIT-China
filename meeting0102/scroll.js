// 记录滚动条位置
var oldScrollTop = 0;
var scrollTop;
// 获取导航部分
var oNavbg = document.getElementById("nav-trans");

// 页面加载事件
// window.onload = function () {
//     // 获取sessionStorage中的数据
//     var nowScrollTop = sessionStorage["scrollTop"];
//     if (nowScrollTop != null) {
//         if (nowScrollTop > 56) {
//             oNavbg.style.top = -56 + "px";
//             oldScrollTop = nowScrollTop;
//         }
//     }
// }

// 滚动条滚动事件
window.onscroll = function () {
    // 获取滚动条跟顶部的距离
    scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    // 判断导航部分是否滚动到可视区域上方
    if (scrollTop > 56) {
        oNavbg.style.top = -56 + "px";
    }
    // 判断滚动条是否向上滚动
    if (scrollTop < oldScrollTop) {
        oNavbg.style.top = 0 + "px";
    }
    oldScrollTop = scrollTop;
}

// 刷新页面
window.onbeforeunload = function () {
    // 页面刷新之前将滚动条位置记录下来
    sessionStorage["scrollTop"] = scrollTop;
}
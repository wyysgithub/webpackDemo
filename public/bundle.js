!function (e) {
    var n = {};

    function t(r) {
        if (n[r]) return n[r].exports;
        var l = n[r] = {i: r, l: !1, exports: {}};
        return e[r].call(l.exports, l, l.exports, t), l.l = !0, l.exports
    }

    t.m = e, t.c = n, t.d = function (e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {enumerable: !0, get: r})
    }, t.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, t.t = function (e, n) {
        if (1 & n && (e = t(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (t.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e) for (var l in e) t.d(r, l, function (n) {
            return e[n]
        }.bind(null, l));
        return r
    }, t.n = function (e) {
        var n = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function (e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, t.p = "", t(t.s = 0)
}([function (module, exports, __webpack_require__) {
    eval("const greeter = __webpack_require__(1);\r\nconsole.log(\"main\")\r\ndocument.querySelector('#root').appendChild(greeter());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbWFpbi5qcz9mMTYxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQixtQkFBTyxDQUFDLENBQWM7QUFDdEM7QUFDQSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ3JlZXRlciA9IHJlcXVpcmUoJy4vR3JlZXRlci5qcycpO1xyXG5jb25zb2xlLmxvZyhcIm1haW5cIilcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jvb3QnKS5hcHBlbmRDaGlsZChncmVldGVyKCkpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n")
}, function (module, exports) {
    eval('module.exports = function () {\r\n    console.log("greet");\r\n    let greet = document.createElement(\'div\');\r\n    greet.textContent = "hello";\r\n    return greet;\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvR3JlZXRlci5qcz9iNDEzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImdyZWV0XCIpO1xyXG4gICAgbGV0IGdyZWV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBncmVldC50ZXh0Q29udGVudCA9IFwiaGVsbG9cIjtcclxuICAgIHJldHVybiBncmVldDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n')
}]);
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/index"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=D%3A%5Creact-template%5Cluxiren_v334%5Cluxiren%5Cpackages%5Cagency-theme%5Cpages%5Cindex.js&page=%2F!":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=D%3A%5Creact-template%5Cluxiren_v334%5Cluxiren%5Cpackages%5Cagency-theme%5Cpages%5Cindex.js&page=%2F! ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/\",\n      function () {\n        return __webpack_require__(/*! ./pages/index.js */ \"./pages/index.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD1EJTNBJTVDcmVhY3QtdGVtcGxhdGUlNUNsdXhpcmVuX3YzMzQlNUNsdXhpcmVuJTVDcGFja2FnZXMlNUNhZ2VuY3ktdGhlbWUlNUNwYWdlcyU1Q2luZGV4LmpzJnBhZ2U9JTJGIS5qcyIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLDBDQUFrQjtBQUN6QztBQUNBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCLE1BQU0sVUFBVTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/NmMyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIi4vcGFnZXMvaW5kZXguanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93Ll9fTkVYVF9QLnB1c2goW1wiL1wiXSlcbiAgICAgIH0pO1xuICAgIH1cbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=D%3A%5Creact-template%5Cluxiren_v334%5Cluxiren%5Cpackages%5Cagency-theme%5Cpages%5Cindex.js&page=%2F!\n"));

/***/ }),

/***/ "./lib/redirect.js":
/*!*************************!*\
  !*** ./lib/redirect.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Redirect\": function() { return /* binding */ Redirect; },\n/* harmony export */   \"getRedirect\": function() { return /* binding */ getRedirect; },\n/* harmony export */   \"useRedirect\": function() { return /* binding */ useRedirect; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _languageDetector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./languageDetector */ \"./lib/languageDetector.js\");\nvar _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\nvar useRedirect = function useRedirect(go) {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  var to = go || router.asPath; // language detection\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var detectedLng = _languageDetector__WEBPACK_IMPORTED_MODULE_2__[\"default\"].detect();\n\n    if (to.startsWith('/' + detectedLng) && router.route === '/404') {\n      // prevent endless loop\n      router.replace('/' + detectedLng + router.route);\n      return;\n    }\n\n    _languageDetector__WEBPACK_IMPORTED_MODULE_2__[\"default\"].cache(detectedLng);\n    router.replace('/' + detectedLng + to);\n  });\n  return null;\n};\n\n_s(useRedirect, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];\n});\n\nvar Redirect = function Redirect() {\n  _s2();\n\n  useRedirect();\n  return null;\n}; // eslint-disable-next-line react/display-name\n\n_s2(Redirect, \"4sVsHYlnUcDx9N5X/A6uPck44Lc=\", false, function () {\n  return [useRedirect];\n});\n\n_c = Redirect;\nvar getRedirect = function getRedirect(to) {\n  var _s3 = $RefreshSig$();\n\n  return _s3(function () {\n    _s3();\n\n    useRedirect(to);\n    return null;\n  }, \"4sVsHYlnUcDx9N5X/A6uPck44Lc=\", false, function () {\n    return [useRedirect];\n  });\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Redirect\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcmVkaXJlY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxJQUFNRyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxFQUFELEVBQVE7RUFBQTs7RUFDakMsSUFBTUMsTUFBTSxHQUFHSixzREFBUyxFQUF4QjtFQUNBLElBQU1LLEVBQUUsR0FBR0YsRUFBRSxJQUFJQyxNQUFNLENBQUNFLE1BQXhCLENBRmlDLENBSWpDOztFQUNBUCxnREFBUyxDQUFDLFlBQU07SUFDZCxJQUFNUSxXQUFXLEdBQUdOLGdFQUFBLEVBQXBCOztJQUNBLElBQUlJLEVBQUUsQ0FBQ0ksVUFBSCxDQUFjLE1BQU1GLFdBQXBCLEtBQW9DSCxNQUFNLENBQUNNLEtBQVAsS0FBaUIsTUFBekQsRUFBaUU7TUFBRTtNQUNqRU4sTUFBTSxDQUFDTyxPQUFQLENBQWUsTUFBTUosV0FBTixHQUFvQkgsTUFBTSxDQUFDTSxLQUExQztNQUNBO0lBQ0Q7O0lBRURULCtEQUFBLENBQXVCTSxXQUF2QjtJQUNBSCxNQUFNLENBQUNPLE9BQVAsQ0FBZSxNQUFNSixXQUFOLEdBQW9CRixFQUFuQztFQUNELENBVFEsQ0FBVDtFQVdBLE9BQU8sSUFBUDtBQUNELENBakJNOztHQUFNSDtVQUNJRjs7O0FBa0JWLElBQU1hLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07RUFBQTs7RUFDNUJYLFdBQVc7RUFDWCxPQUFPLElBQVA7QUFDRCxDQUhNLEVBS1A7O0lBTGFXO1VBQ1hYOzs7S0FEV1c7QUFNTixJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDVCxFQUFEO0VBQUE7O0VBQUEsV0FBUSxZQUFNO0lBQUE7O0lBQ3ZDSCxXQUFXLENBQUNHLEVBQUQsQ0FBWDtJQUNBLE9BQU8sSUFBUDtFQUNELENBSDBCO0lBQUEsUUFDekJILFdBRHlCO0VBQUE7QUFBQSxDQUFwQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvcmVkaXJlY3QuanM/ODNmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgbGFuZ3VhZ2VEZXRlY3RvciBmcm9tICcuL2xhbmd1YWdlRGV0ZWN0b3InO1xuXG5leHBvcnQgY29uc3QgdXNlUmVkaXJlY3QgPSAoZ28pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHRvID0gZ28gfHwgcm91dGVyLmFzUGF0aDtcblxuICAvLyBsYW5ndWFnZSBkZXRlY3Rpb25cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBkZXRlY3RlZExuZyA9IGxhbmd1YWdlRGV0ZWN0b3IuZGV0ZWN0KCk7XG4gICAgaWYgKHRvLnN0YXJ0c1dpdGgoJy8nICsgZGV0ZWN0ZWRMbmcpICYmIHJvdXRlci5yb3V0ZSA9PT0gJy80MDQnKSB7IC8vIHByZXZlbnQgZW5kbGVzcyBsb29wXG4gICAgICByb3V0ZXIucmVwbGFjZSgnLycgKyBkZXRlY3RlZExuZyArIHJvdXRlci5yb3V0ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGFuZ3VhZ2VEZXRlY3Rvci5jYWNoZShkZXRlY3RlZExuZyk7XG4gICAgcm91dGVyLnJlcGxhY2UoJy8nICsgZGV0ZWN0ZWRMbmcgKyB0byk7XG4gIH0pO1xuXG4gIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGNvbnN0IFJlZGlyZWN0ID0gKCkgPT4ge1xuICB1c2VSZWRpcmVjdCgpO1xuICByZXR1cm4gbnVsbDtcbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9kaXNwbGF5LW5hbWVcbmV4cG9ydCBjb25zdCBnZXRSZWRpcmVjdCA9ICh0bykgPT4gKCkgPT4ge1xuICB1c2VSZWRpcmVjdCh0byk7XG4gIHJldHVybiBudWxsO1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJsYW5ndWFnZURldGVjdG9yIiwidXNlUmVkaXJlY3QiLCJnbyIsInJvdXRlciIsInRvIiwiYXNQYXRoIiwiZGV0ZWN0ZWRMbmciLCJkZXRlY3QiLCJzdGFydHNXaXRoIiwicm91dGUiLCJyZXBsYWNlIiwiY2FjaGUiLCJSZWRpcmVjdCIsImdldFJlZGlyZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/redirect.js\n"));

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_redirect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/redirect */ \"./lib/redirect.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_lib_redirect__WEBPACK_IMPORTED_MODULE_0__.Redirect);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0EsK0RBQWVBLG1EQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tICcuLi9saWIvcmVkaXJlY3QnO1xuZXhwb3J0IGRlZmF1bHQgUmVkaXJlY3Q7XG4iXSwibmFtZXMiOlsiUmVkaXJlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=D%3A%5Creact-template%5Cluxiren_v334%5Cluxiren%5Cpackages%5Cagency-theme%5Cpages%5Cindex.js&page=%2F!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
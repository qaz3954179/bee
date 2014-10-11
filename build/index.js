KISSY.add("bee/index", ["node"], function(S ,require, exports, module) {
var node = require("node");
/*
Sat Oct 11 2014 13:21:17 GMT+0800 (CST)
combined files by KMD:

src/index.js
src/mods/header.js
src/mods/article.js
*/
var beeModsHeader, beeModsArticle, beeIndex;
beeModsHeader = function (exports) {
  exports = {};
  var $ = node.all;
  exports = {
    init: function () {
      S.log('header init');
      $('header').html('this is header');
    }
  };
  return exports;
}();
beeModsArticle = function (exports) {
  exports = {};
  var $ = node.all;
  exports = {
    init: function () {
      S.log('article init');
      $('article').html('this is article');
    }
  };
  return exports;
}();
beeIndex = function (exports) {
  exports = {};
  var header = beeModsHeader;
  header.init();
  var article = beeModsArticle;
  article.init();
  return exports;
}();
module.exports = beeIndex;
});
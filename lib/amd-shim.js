'use strict';
const stew = require('broccoli-stew');
/**
 * Copied shamelessly from
 * https://github.com/ember-cli/ember-cli/blob/380b79a69fa065aa11e848862cb4e1d2d9887ece/lib/broccoli/amd-shim.js
 */
module.exports = function shimAmd(tree, nameMapping) {
  return stew.map(tree, function(content, relativePath) {
    const name = nameMapping[relativePath];
    if (name) {
      return [
        '(function(define){\n',
        content,
        '\n})((function(){ function newDefine(){ var args = Array.prototype.slice.call(arguments); args.unshift("',
        name,
        '"); return define.apply(null, args); }; newDefine.amd = true; return newDefine; })());'
      ].join('');
    } else {
      return content;
    }
  });
};

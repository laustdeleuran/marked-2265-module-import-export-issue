"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.format = void 0;
var _isomorphicDompurify = _interopRequireDefault(require("isomorphic-dompurify"));
var _marked = require("marked");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_marked.marked.use({
  renderer: {
    image() {
      return '[Markdown images are not supported]';
    }
  }
});
const format = markdown => _isomorphicDompurify.default.sanitize(_marked.marked.parse(markdown, {
  breaks: true
}));
exports.format = format;
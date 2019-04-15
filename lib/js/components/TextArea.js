"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var TextArea = /** @class */ (function (_super) {
    __extends(TextArea, _super);
    function TextArea() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleOnChange = function (event) {
            var onChange = _this.props.onChange;
            onChange(event.target.value);
        };
        return _this;
    }
    TextArea.prototype.render = function () {
        var _a = this.props, className = _a.className, readOnly = _a.readOnly, textAreaProps = _a.textAreaProps, height = _a.height, editorRef = _a.editorRef, value = _a.value;
        return (React.createElement("textarea", __assign({ className: "mde-text " + (className || ""), style: { height: height }, ref: editorRef, onChange: this.handleOnChange, readOnly: readOnly, value: value }, textAreaProps)));
    };
    return TextArea;
}(React.Component));
exports.TextArea = TextArea;

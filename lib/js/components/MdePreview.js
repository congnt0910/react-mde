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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classNames = require("classnames");
var MdePreview = /** @class */ (function (_super) {
    __extends(MdePreview, _super);
    function MdePreview(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            loading: true,
        };
        return _this;
    }
    MdePreview.prototype.componentDidMount = function () {
        var _this = this;
        var _a = this.props, markdown = _a.markdown, generateMarkdownPreview = _a.generateMarkdownPreview;
        generateMarkdownPreview(markdown).then(function (previewHtml) {
            _this.setState({
                html: previewHtml,
                loading: false
            });
        });
    };
    MdePreview.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, minHeight = _a.minHeight, emptyPreviewHtml = _a.emptyPreviewHtml;
        var _b = this.state, html = _b.html, loading = _b.loading;
        var finalHtml = loading ? emptyPreviewHtml : html;
        return (React.createElement("div", { className: classNames("mde-preview", { className: className, loading: loading }), style: { minHeight: minHeight + 10 } },
            React.createElement("div", { className: "mde-preview-content", dangerouslySetInnerHTML: { __html: finalHtml || "<p>&nbsp;</p>" }, ref: function (p) { return _this.previewRef = p; } })));
    };
    return MdePreview;
}(React.Component));
exports.MdePreview = MdePreview;

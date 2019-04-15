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
var commands_1 = require("../commands");
var _1 = require(".");
var CommandUtils_1 = require("../util/CommandUtils");
var react_mde_en_1 = require("../l18n/react-mde.en");
var commandOrchestrator_1 = require("../commandOrchestrator");
var icons_1 = require("../icons");
var classnames_1 = require("classnames");
var ReactMde = /** @class */ (function (_super) {
    __extends(ReactMde, _super);
    function ReactMde(props) {
        var _this = _super.call(this, props) || this;
        // resizeYStart will be null when it is not resizing
        _this.gripDrag = null;
        _this.handleTextChange = function (value) {
            var onChange = _this.props.onChange;
            onChange(value);
        };
        _this.handleGripMouseDown = function (event) {
            _this.gripDrag = {
                originalHeight: _this.state.editorHeight,
                originalDragY: event.clientY
            };
        };
        _this.handleGripMouseUp = function () {
            _this.gripDrag = null;
        };
        _this.handleGripMouseMove = function (event) {
            if (_this.gripDrag !== null) {
                var newHeight = _this.gripDrag.originalHeight + event.clientY - _this.gripDrag.originalDragY;
                if (newHeight >= _this.props.minEditorHeight && newHeight <= _this.props.maxEditorHeight) {
                    _this.setState(__assign({}, _this.state, { editorHeight: _this.gripDrag.originalHeight + (event.clientY - _this.gripDrag.originalDragY) }));
                }
            }
        };
        _this.handleTabChange = function (newTab) {
            var onTabChange = _this.props.onTabChange;
            onTabChange(newTab);
        };
        _this.setTextAreaRef = function (element) {
            _this.textAreaRef = element;
            _this.commandOrchestrator = new commandOrchestrator_1.TextAreaCommandOrchestrator(_this.textAreaRef);
        };
        _this.handleCommand = function (command) {
            _this.commandOrchestrator.executeCommand(command);
        };
        _this.state = {
            editorHeight: props.minEditorHeight
        };
        _this.keyCommandMap = {};
        var commands = _this.props.commands;
        _this.keyCommandMap = CommandUtils_1.extractCommandMap(commands);
        return _this;
    }
    ReactMde.prototype.componentDidMount = function () {
        document.addEventListener("mousemove", this.handleGripMouseMove);
        document.addEventListener("mouseup", this.handleGripMouseUp);
    };
    ReactMde.prototype.render = function () {
        var _this = this;
        var _a = this.props, getIcon = _a.getIcon, commands = _a.commands, className = _a.className, emptyPreviewHtml = _a.emptyPreviewHtml, readOnly = _a.readOnly, value = _a.value, l18n = _a.l18n, minPreviewHeight = _a.minPreviewHeight, textAreaProps = _a.textAreaProps, selectedTab = _a.selectedTab, generateMarkdownPreview = _a.generateMarkdownPreview;
        return (React.createElement("div", { className: classnames_1.default("react-mde", "react-mde-tabbed-layout", className) },
            React.createElement(_1.MdeToolbar, { getIcon: getIcon, commands: commands, onCommand: this.handleCommand, onTabChange: this.handleTabChange, tab: selectedTab, readOnly: readOnly, l18n: l18n }),
            selectedTab === "write" ?
                React.createElement(React.Fragment, null,
                    React.createElement(_1.TextArea, { editorRef: this.setTextAreaRef, onChange: this.handleTextChange, readOnly: readOnly, textAreaProps: textAreaProps, height: this.state.editorHeight, value: value }),
                    React.createElement("div", { className: "grip", onMouseDown: this.handleGripMouseDown },
                        React.createElement("svg", { "aria-hidden": "true", "data-prefix": "far", "data-icon": "ellipsis-h", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", className: "icon" },
                            React.createElement("path", { fill: "currentColor", d: "M304 256c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zm120-48c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm-336 0c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z", className: "" }))))
                :
                    React.createElement(_1.MdePreview, { previewRef: function (c) { return _this.previewRef = c; }, emptyPreviewHtml: emptyPreviewHtml, minHeight: minPreviewHeight, generateMarkdownPreview: generateMarkdownPreview, markdown: value })));
    };
    ReactMde.defaultProps = {
        commands: commands_1.getDefaultCommands(),
        getIcon: function (name) { return React.createElement(icons_1.SvgIcon, { icon: name }); },
        emptyPreviewHtml: "<p>&nbsp;</p>",
        readOnly: false,
        l18n: react_mde_en_1.enL18n,
        minEditorHeight: 200,
        maxEditorHeight: 500,
        minPreviewHeight: 200,
        selectedTab: "write"
    };
    return ReactMde;
}(React.Component));
exports.ReactMde = ReactMde;

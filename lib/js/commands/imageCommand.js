"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MarkdownUtil_1 = require("../util/MarkdownUtil");
exports.imageCommand = {
    name: "image",
    buttonProps: { "aria-label": "Add image" },
    execute: function (state0, api) {
        // Adjust the selection to encompass the whole word if the caret is inside one
        var newSelectionRange = MarkdownUtil_1.selectWord({ text: state0.text, selection: state0.selection });
        var state1 = api.setSelectionRange(newSelectionRange);
        // Replaces the current selection with the bold mark up
        var state2 = api.replaceSelection("![" + state1.selectedText + "](image-url)");
        // Adjust the selection to not contain the **
        api.setSelectionRange({
            start: state2.selection.end - 12 - state1.selectedText.length,
            end: state2.selection.end - 12
        });
    },
    keyCommand: "image",
};

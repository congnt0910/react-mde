import * as React from "react";
import { Command, CommandGroup, GenerateMarkdownPreview, GetIcon } from "../types";
import { MdePreview } from ".";
import { Tab } from "../types/Tab";
import { L18n } from "..";
import { CommandOrchestrator } from "../commandOrchestrator";
export interface ReactMdeProps {
    value: string;
    onChange: (value: string) => void;
    selectedTab: "write" | "preview";
    onTabChange: (tab: "write" | "preview") => void;
    generateMarkdownPreview: GenerateMarkdownPreview;
    minEditorHeight: number;
    maxEditorHeight: number;
    minPreviewHeight: number;
    className?: string;
    commands?: CommandGroup[];
    getIcon?: GetIcon;
    emptyPreviewHtml?: string;
    readOnly?: boolean;
    textAreaProps?: Partial<React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>>;
    l18n?: L18n;
}
export interface ReactMdeState {
    editorHeight: number;
}
export declare class ReactMde extends React.Component<ReactMdeProps, ReactMdeState> {
    commandOrchestrator: CommandOrchestrator;
    textAreaRef: HTMLTextAreaElement;
    previewRef: MdePreview;
    gripDrag: {
        originalDragY: number;
        originalHeight: number;
    };
    keyCommandMap: {
        [key: string]: Command;
    };
    static defaultProps: Partial<ReactMdeProps>;
    constructor(props: ReactMdeProps);
    handleTextChange: (value: string) => void;
    handleGripMouseDown: (event: React.MouseEvent<HTMLDivElement>) => void;
    handleGripMouseUp: () => void;
    handleGripMouseMove: (event: MouseEvent) => void;
    handleTabChange: (newTab: Tab) => void;
    componentDidMount(): void;
    setTextAreaRef: (element: HTMLTextAreaElement) => void;
    handleCommand: (command: Command) => void;
    render(): JSX.Element;
}

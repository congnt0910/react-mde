import * as React from "react";
import { GenerateMarkdownPreview } from "../types";
export interface ReactMdePreviewProps {
    className?: string;
    previewRef?: (ref: MdePreview) => void;
    emptyPreviewHtml?: string;
    minHeight: number;
    generateMarkdownPreview: GenerateMarkdownPreview;
    markdown: string;
}
export interface ReactMdePreviewState {
    loading: boolean;
    html?: string;
}
export declare class MdePreview extends React.Component<ReactMdePreviewProps, ReactMdePreviewState> {
    previewRef: HTMLDivElement;
    constructor(props: any);
    componentDidMount(): void;
    render(): JSX.Element;
}

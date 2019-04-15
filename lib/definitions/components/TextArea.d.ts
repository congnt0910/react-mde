import * as React from "react";
export interface MdeEditorProps {
    value: string;
    onChange: (value: string) => void;
    className?: string;
    editorRef?: (ref: HTMLTextAreaElement) => void;
    readOnly?: boolean;
    height?: number;
    textAreaProps?: Partial<React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>>;
}
export declare class TextArea extends React.Component<MdeEditorProps, {}> {
    handleOnChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    render(): JSX.Element;
}

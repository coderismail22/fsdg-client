import { useRef } from 'react';
import JoditEditor, { Jodit } from 'jodit-react';

const RichTextEditor = ({ content, onChangeContent }) => {
    const editor = useRef(null);

    // const config = {
        // buttons: [
        //     'bold', 'italic', 'underline', 'strikethrough', 'eraser', 'ul', 'ol',
        //     'font', 'fontsize', 'paragraph', 'lineHeight', 'superscript',
        //     'subscript', 'classSpan', 'file', 'image', 'video', 'spellcheck', 'speechRecognize'
        // ],
        // height: 400,
    // };

    return (
        <JoditEditor
            // config={config}
            ref={editor}
            value={content}
            tabIndex={1} // tabIndex of textarea
            onChange={newContent => onChangeContent(newContent)}
        />
    );
};

export default RichTextEditor;
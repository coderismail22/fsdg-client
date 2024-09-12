import { useRef } from 'react';
import JoditEditor from 'jodit-react';

const RichTextEditor = ({ content, onChangeContent }) => {
    const editor = useRef(null);

    return (
        <JoditEditor
            ref={editor}
            value={content}
            tabIndex={1} // tabIndex of textarea
            onChange={newContent => onChangeContent(newContent)}
        />
    );
};

export default RichTextEditor;
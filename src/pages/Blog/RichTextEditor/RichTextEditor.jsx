import { useRef } from 'react';
import JoditEditor from 'jodit-react';

const RichTextEditor = ({ placeholder, onChangeContent }) => {
    const editor = useRef(null);

    return (
        <JoditEditor
            ref={editor}
            tabIndex={1} // tabIndex of textarea
            onChange={newContent => onChangeContent(newContent)}
        />
    );
};

export default RichTextEditor;
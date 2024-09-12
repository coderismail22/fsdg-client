import { useState, useEffect, useRef } from 'react';
import JoditEditor from 'jodit-react';
import axios from 'axios';
import Swal from 'sweetalert2';
import ImageUpload from '../ImageUpload/ImageUpload';

const PostEditModal = ({ isOpen, onClose, post, onUpdate }) => {
    const [title, setTitle] = useState(post.title || '');
    const [label, setLabel] = useState(post.label || '');
    const [content, setContent] = useState(post.content || '');
    const [imgUrl, setImgUrl] = useState(post.imgUrl || '');
    const [uploadedImageUrl, setUploadedImageUrl] = useState(post.imgUrl || '');

    const editorRef = useRef(null);

    useEffect(() => {
        setTitle(post.title || '');
        setLabel(post.label || '');
        setContent(post.content || '');
        setImgUrl(post.imgUrl || '');
        setUploadedImageUrl(post.imgUrl || '');
    }, [post]);

    const handleUpdate = async () => {
        console.log(title, label, content, imgUrl)
        // try {
        //     await axios.patch(`http://localhost:5000/api/posts/${post._id}`, {
        //         title,
        //         content,
        //         imgUrl: uploadedImageUrl,
        //     });
        //     Swal.fire('Success!', 'Post updated successfully.', 'success');
        //     onUpdate(); // Refresh the list in the parent component
        //     onClose(); // Close the modal
        // } catch (error) {
        //     Swal.fire('Error!', 'Failed to update post.', 'error');
        // }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center overflow-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-screen overflow-y-auto">
                <h2 className="text-2xl font-semibold mb-4">Edit Post</h2>

                {/* Title */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Title</label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded p-2"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                {/* Image Upload Section */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Upload Cover Image</label>
                    <ImageUpload setUploadedImageUrl={setUploadedImageUrl} />
                    {uploadedImageUrl === '' && (
                        <p className="text-red-500 text-sm">Image is required</p>
                    )}
                </div>

                {/* Content Editor */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Content</label>
                    <JoditEditor
                        ref={editorRef}
                        value={content}
                        onChange={setContent}
                        config={{
                            height: 300, // Set a fixed height for the editor
                            maxHeight: 300, // Maximum height to limit overflow
                            style: {
                                overflowY: 'scroll', // Enable scrolling for long content
                            }
                        }}
                    />
                </div>

                {/* Buttons */}
                <div className="flex justify-end space-x-4">
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        onClick={() => handleUpdate()}
                    >
                        Save Changes
                    </button>
                    <button
                        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostEditModal;

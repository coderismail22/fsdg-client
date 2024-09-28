import { useState, useEffect, useRef } from 'react';
import JoditEditor from 'jodit-react';
import axios from 'axios';
import Swal from 'sweetalert2';
import ImageUpload from '../ImageUpload/ImageUpload';
import RichTextEditor from '../RichTextEditor/RichTextEditor';

const PostEditModal = ({ isOpen, onClose, post, onPostUpdate }) => {
    const [title, setTitle] = useState(post.title || '');
    const [label, setLabel] = useState(post.label || '');
    const [author, setAuthor] = useState(post.author || '');
    const [content, setContent] = useState(post.content || '');
    const [uploadedImageUrl, setUploadedImageUrl] = useState(post.imgUrl || '');

    { 'post test', post }

    //child to parent state lifting
    const handleContentChange = (newContent) => {
        setContent(newContent); // Update the state in the parent
    };

    const editorRef = useRef(null);

    useEffect(() => {
        setTitle(post.title || '');
        setLabel(post.label || '');
        setContent(post.content || '');
        setAuthor(post.author || '');
        // setImgUrl(post.imgUrl || '');
        setUploadedImageUrl(post.imgUrl || '');
    }, [post]);

    const handleUpdate = async () => {
        console.log('title', title) // Getting Latest
        console.log('label', label) // Getting Latest
        console.log('author', author) // Getting Latest
        console.log('content check check', content) // Getting Latest
        console.log('updated imgUrl', uploadedImageUrl) // Getting Latest

        const updatedPost = {
            author, title, label, content, imgUrl: uploadedImageUrl
        }
        console.log('updatedPost', updatedPost)
        try {
            const response = await axios.patch(`https://fsdg-blog-login-server.vercel.app/api/posts/${post._id}`, updatedPost);
            console.log("🚀 ~ handleUpdate ~ response:", response)
            // await axios.patch(`https://fsdg-blog-login-server.vercel.app/api/posts/${post._id}`, updatedPost);
            Swal.fire('Success!', 'Post updated successfully.', 'success');
            onPostUpdate()
            onClose(); // Close the modal
        } catch (error) {
            Swal.fire('Error!', 'Failed to update post.', 'error');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center overflow-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-screen overflow-y-auto">
                <h2 className="text-2xl font-semibold mb-4">Edit Post</h2>
                {console.log('post', post)}

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
                {/* Label */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Label</label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded p-2"
                        value={label}
                        onChange={(e) => setLabel(e.target.value)}
                    />
                </div>
                {/* Author */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Author</label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded p-2"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
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
                <div>
                    <label className="block font-medium">Content</label>
                    <RichTextEditor content={content} onChangeContent={handleContentChange} />
                    {console.log('content', content)}
                </div>



                {/* Confirmation Button */}
                <div className="flex justify-end space-x-4">
                    {/* Save Button */}
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        onClick={() => handleUpdate()}
                    >
                        Save Changes
                    </button>
                    {/* Cancel Button */}
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

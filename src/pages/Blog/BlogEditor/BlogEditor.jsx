import { useState } from 'react';
import ImageUpload from '../ImageUpload/ImageUpload'; // Import the ImageUpload component
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { IoCloudUploadOutline } from 'react-icons/io5';
import RichTextEditor from '../RichTextEditor/RichTextEditor';

const BlogEditor = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [uploadedImageUrl, setUploadedImageUrl] = useState(''); // Store the uploaded image URL
    const author = "Feroj Alam";
    const navigate = useNavigate()

    const handleSubmitBlog = async (e) => {
        e.preventDefault();

        const blogData = {
            title,
            content,
            author,
            imgUrl: uploadedImageUrl, // Use the uploaded Cloudinary image URL
        };

        try {
            const response = await axios.post("https://fsdg-blog-login-server.vercel.app/api/blogs", blogData);
            if (response.data) {
                Swal.fire('Success', 'Blog post created successfully!', 'success');
                setTitle('');
                setContent('');
                setUploadedImageUrl(''); // Clear image after success
            }
        } catch (error) {
            Swal.fire('Error', 'Error creating blog post', 'error');
        }
    };

    const isFormValid = title && content && uploadedImageUrl; // Check if all fields are filled

    return (
        <div className="container mx-auto px-4 py-8 bg-slate-500">
            <h1 className="text-3xl font-bold text-center mb-4">Create a Blog Post</h1>
            <form onSubmit={(e) => handleSubmitBlog(e)} className="shadow-md rounded-lg p-4">
                <div className="mb-4">
                    <label htmlFor="title" className="text-gray-700 font-medium block mb-2">
                        Title:
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter blog title"
                        required
                    />
                </div>
                {/* <div className="mb-4">
                    <label htmlFor="content" className="text-gray-700 font-medium block mb-2">
                        Content:
                    </label>
                    <textarea
                        id="content"
                        name="content"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Enter blog content"
                        rows="10"
                        required
                    ></textarea>
                </div> */}
                {/* Jodit Content */}
                <RichTextEditor />
                {/* Jodit Content */}

                <div className="mb-4">
                    <ImageUpload setUploadedImageUrl={setUploadedImageUrl} />
                </div>
                {isFormValid && (
                    <button type="submit" className="flex items-center justify-center gap-2 bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700">
                        Post The Blog
                        <IoCloudUploadOutline />

                    </button>
                )}
            </form>
        </div>
    );
};

export default BlogEditor;

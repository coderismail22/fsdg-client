import { useParams } from 'react-router-dom'; // Import useParams to access the dynamic ID
import axios from 'axios';
import { useEffect, useState } from 'react';

const BlogDetail = () => {
    const { id } = useParams(); // Get the blog ID from the URL
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchBlogDetail = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/${id}`); // Fetch blog by ID
            setBlog(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching blog detail:", error);
            setError("Something went wrong while fetching the blog.");
            setLoading(false);
        }
    };

    useEffect(() => { fetchBlogDetail(); }, [id]); // Fetch the blog when component mounts

    if (loading) {
        return <p>Loading blog...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            {blog ? (
                <div className="mx-auto max-w-3xl">
                    <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
                    <img src={blog.imgUrl} alt={blog.title} className="w-full h-80 object-cover mb-4 rounded-md" />
                    <p className="text-gray-600 text-lg mb-4">{blog.content}</p>
                    <p className="text-gray-500 text-sm">Author: {blog.author}</p>
                </div>
            ) : (
                <p>Blog not found.</p>
            )}
        </div>
    );
};

export default BlogDetail;

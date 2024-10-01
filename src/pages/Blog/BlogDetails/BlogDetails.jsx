import { useParams } from 'react-router-dom'; // Import useParams to access the dynamic ID
import axios from 'axios';
import { useEffect, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';

const BlogDetail = () => {
    const { id } = useParams(); // Get the blog ID from the URL
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchBlogDetail = async () => {
        try {
            // TODO: Add Server Url
            const response = await axios.get(`https://fsdg-latest-v2.vercel.app/api/posts/${id}`); // Fetch blog by ID
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
        return <p className='h-screen flex items-center justify-center mx-auto'> <RotatingLines
            visible={true}
            height="46"
            width="46"
            color="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
        /></p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            {blog ? (
                <div className=" font-notoserifbangla mx-auto max-w-3xl">
                    <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
                    <img src={blog.imgUrl} alt={blog.title} className="w-full h-80 object-cover mb-4 rounded-md" />
                    <p dangerouslySetInnerHTML={{ __html: blog.content }}></p>
                    <p className="text-gray-500 text-sm">Author: {blog.author}</p>
                </div>
            ) : (
                <p>Blog not found.</p>
            )}
        </div>
    );
};

export default BlogDetail;

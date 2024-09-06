import axios from "axios";
import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { Link } from "react-router-dom";

const Blogs = () => {
    // State to store fetched blogs
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Function to fetch blogs
    const fetchBlogs = async () => {
        try {
            const response = await axios.get('http://localhost:5000/'); // Adjust the endpoint if necessary
            setBlogs(response.data); // Assuming response.data contains the blog array
            setLoading(false);
        } catch (error) {
            console.error("Error fetching blogs:", error);
            setError("Something went wrong while fetching the blogs.");
            setLoading(false);
        }
    };

    useEffect(() => { fetchBlogs() }, [])

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
        /></p>; // Display loading text
    }

    if (error) {
        return <p>{error}</p>; // Display error message
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-4">Blogs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {blogs.map((blog) => (
                    <div key={blog._id} className="p-4 border border-gray-200 rounded-md shadow-md">
                        <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
                        <p className="text-gray-700">{blog.content.substring(0, 100)}...</p>
                        <img src={blog.imgUrl} alt={blog.title} className="w-full h-40 object-cover mt-4" />
                        <p className="text-gray-500 text-sm mt-2">Author: {blog.author}</p>
                        <Link to={`/blogs/${blog._id}`} className="text-blue-500 mt-4 inline-block">View More</Link> {/* View More Button */}

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Blogs
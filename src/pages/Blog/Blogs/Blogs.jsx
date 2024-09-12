import axios from "axios";
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { RotatingLines } from "react-loader-spinner";
import { Link } from "react-router-dom";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [visibleBlogs, setVisibleBlogs] = useState(5); // Controls how many blogs are visible initially

    // Fetch blogs
    const fetchBlogs = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/posts");
            setBlogs(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching blogs:", error);
            setError("Something went wrong while fetching the blogs !");
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    if (loading) {
        return (
            <p className="h-screen flex items-center justify-center mx-auto">
                <RotatingLines
                    visible={true}
                    height="46"
                    width="46"
                    color="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    ariaLabel="rotating-lines-loading"
                />
            </p>
        );
    }

    if (error) {
        return <p className="text-red-500 text-xl text-center font-bold py-10  border-2 border-red-500 rounded-md m-5">{error}</p>;
    }

    // Function to load more blogs
    const loadMore = () => {
        setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 5); // Load 5 more blogs
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {/* <h1 className="text-3xl font-bold text-center mb-4">Blogs</h1> */}

            {blogs.length === 0 ? (
                <p className="text-center text-gray-600 text-xl font-semibold mt-6">There&apos;s no post to show</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {blogs.slice(0, visibleBlogs).map((blog) => (
                        <div key={blog._id} className="p-4 border border-gray-200 rounded-md shadow-md">
                            <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
                            <div>
                                <p dangerouslySetInnerHTML={{ __html: blog.content.substring(0, 100) + (blog.content.length > 100 ? '...' : '') }} className="text-gray-600 text-sm md:text-base mb-4"></p>
                            </div>
                            <img
                                src={blog.imgUrl}
                                alt={blog.title}
                                className="w-full h-40 object-cover mt-4"
                            />
                            <p className="text-gray-500 text-sm mt-2">
                                Author: {blog.author}
                            </p>
                            <Link
                                to={`/blogs/${blog._id}`}
                                className="flex gap-2 items-center justify-center bg-black text-white p-3 mt-4 hover:bg-gray-800 transition-colors duration-300"
                            >
                                <button className="font-palanquin">Read more</button>
                                <FaArrowRightLong />
                            </Link>
                        </div>
                    ))}
                </div>
            )}

            {visibleBlogs < blogs.length && (
                <div className="flex justify-center mt-6">
                    <button
                        onClick={loadMore}
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
                    >
                        More Posts
                    </button>
                </div>
            )}
        </div>
    );
};

export default Blogs;

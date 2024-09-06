import axios from "axios";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { RotatingLines } from "react-loader-spinner";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true); // State for loading
    const [error, setError] = useState(null);

    // Fetch blogs
    const fetchBlogs = async () => {
        setLoading(true); // Set loading to true before fetching data
        try {
            const { data } = await axios.get("http://localhost:5000/");
            setBlogs(data);
        } catch (error) {
            console.error("Error fetching blogs:", error);
            setError("Something went wrong while fetching the blogs.");
        } finally {
            setLoading(false); // Set loading to false after data fetch
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center">
                <RotatingLines
                    visible={true}
                    height="46"
                    width="46"
                    color="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    ariaLabel="rotating-lines-loading"
                />
            </div>
        ); // Show spinner while loading
    }

    if (error) {
        return <p>{error}</p>; // Display error message if there was an error
    }

    // Delete a blog
    const deleteBlog = async (id) => {
        try {
            const result = await Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#d33",
                cancelButtonColor: "#3085d6",
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "Cancel",
            });

            if (result.isConfirmed) {
                await axios.delete(`http://localhost:5000/${id}`);
                Swal.fire("Deleted!", "Your blog post has been deleted.", "success");
                fetchBlogs(); // Re-fetch blogs after deletion
            }
        } catch (error) {
            Swal.fire("Error!", "Failed to delete blog post.", "error");
        }
    };

    // Edit a blog
    const editBlog = async (id) => {
        const { value: formValues } = await Swal.fire({
            title: "Edit Blog Post",
            html:
                '<input id="title" class="swal2-input" placeholder="Blog Title">' +
                '<textarea id="content" class="swal2-textarea" placeholder="Blog Content"></textarea>',
            focusConfirm: false,
            showCancelButton: true,
            confirmButtonText: "Save Changes",
            cancelButtonText: "Cancel",
            preConfirm: () => {
                const title = document.getElementById("title").value;
                const content = document.getElementById("content").value;
                return { title, content };
            },
        });

        if (formValues) {
            try {
                await axios.patch(`http://localhost:5000/${id}`, formValues);
                Swal.fire("Success!", "Your blog post has been updated.", "success");
                fetchBlogs(); // Re-fetch blogs after updating
            } catch (error) {
                Swal.fire("Error!", "Failed to update blog post.", "error");
            }
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-4">Blogs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {blogs.map((blog) => (
                    <div
                        key={blog._id}
                        className="p-4 border border-gray-200 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:border-gray-300 bg-white"
                    >
                        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
                            {blog.title}
                        </h2>
                        <p className="text-gray-600 text-sm md:text-base mb-4">
                            {blog.content.length > 100
                                ? `${blog.content.substring(0, 100)}...`
                                : blog.content}
                        </p>
                        {blog.imgUrl && (
                            <img
                                src={blog.imgUrl}
                                alt={blog.title}
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                        )}
                        <p className="text-gray-500 text-sm">Author: {blog.author}</p>
                        <hr className="my-4" />
                        <div className="flex justify-center space-x-5">
                            <MdDeleteOutline
                                className="text-red-500 hover:text-red-700 text-2xl cursor-pointer transition-all duration-200"
                                onClick={() => deleteBlog(blog._id)}
                                title="Delete"
                            />
                            <MdEdit
                                className="text-blue-500 hover:text-blue-700 text-2xl cursor-pointer transition-all duration-200"
                                onClick={() => editBlog(blog._id)}
                                title="Edit"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;

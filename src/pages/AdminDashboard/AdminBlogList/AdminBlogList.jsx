// Blogs.js
import axios from "axios";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { RotatingLines } from "react-loader-spinner";
import PostEditModal from "../../Blog/PostEditModal/PostEditModal"; // Import the modal component
import moment from 'moment';


const AdminBlogList = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [visibleBlogs, setVisibleBlogs] = useState(5); // Initial 5 visible blogs
    const [selectedPost, setSelectedPost] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fetchBlogs = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get("http://localhost:5000/api/posts");
            setBlogs(data);
        } catch (error) {
            console.error("Error fetching blogs:", error);
            setError("Something went wrong while fetching the blogs.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    // Load More Button Handler
    const loadMore = () => {
        setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 5); // Load 5 more blogs
    };

    // Delete Button Handler
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
                await axios.delete(`http://localhost:5000/api/posts/${id}`);
                Swal.fire("Deleted!", "Your blog post has been deleted.", "success");
                fetchBlogs();
            }
        } catch (error) {
            Swal.fire("Error!", "Failed to delete blog post.", "error");
        }
    };

    // Open Modal For Updating Post
    const openEditModal = (post) => {
        setSelectedPost(post);
        setIsModalOpen(true);
    };

    // Modal Close Handler
    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedPost(null);
    };

    // Refresh on update
    const handlePostUpdate = () => {
        fetchBlogs(); // Refresh the list when a post is updated
    };

    // Loading Spinner
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
        );
    }

    // Error Message
    if (error) {
        return <p className="text-red-500 text-xl text-center font-bold py-10  border-2 border-red-500 rounded-md m-5">{error}</p>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            {/* <h1 className="text-3xl font-bold text-center mb-4">Admin Blog List</h1> */}

            {blogs.length === 0 ? (
                <p className="text-center text-gray-600 text-xl font-semibold mt-6">There&apos;s no post to show</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {blogs.slice(0, visibleBlogs).map((blog) => (
                        <div
                            key={blog._id}
                            className="p-4 border border-gray-200 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:border-gray-300 bg-white"
                        >
                            {/* Title */}
                            <div className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
                                {blog.title}
                            </div>
                            {/* Content */}
                            <div>
                                <p dangerouslySetInnerHTML={{ __html: blog.content.substring(0, 100) + (blog.content.length > 100 ? '...' : '') }} className="text-gray-600 text-sm md:text-base mb-4"></p>
                            </div>
                            {/* Post Cover Image */}
                            {blog.imgUrl && (
                                <img
                                    src={blog.imgUrl}
                                    alt={blog.title}
                                    className="w-full h-40 object-cover rounded-md mb-4"
                                />
                            )}
                            {/* Author */}
                            <p className="text-gray-500 text-sm mt-2">
                                <span className="font-bold">Author:</span> {blog.author}
                            </p>
                            {/* Date */}
                            <p className="text-gray-500 text-sm"><span className="font-bold">Published:</span> {moment(blog.createdAt).format('YYYY-MM-DD')}</p>
                            <hr className="my-4" />
                            {/* Edit and Delete Button */}
                            <div className="flex justify-center space-x-5">
                                <MdDeleteOutline
                                    className="text-red-500 hover:text-red-700 text-2xl cursor-pointer transition-all duration-200"
                                    onClick={() => deleteBlog(blog._id)}
                                    title="Delete"
                                />
                                <MdEdit
                                    className="text-blue-500 hover:text-blue-700 text-2xl cursor-pointer transition-all duration-200"
                                    onClick={() => openEditModal(blog)}
                                    title="Edit"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {/* More Posts Button */}
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
            {/* Post Update Modal */}
            {isModalOpen && selectedPost && (
                <PostEditModal
                    isOpen={isModalOpen}
                    onClose={handleModalClose}
                    post={selectedPost}
                    onUpdate={handlePostUpdate}
                />
            )}
        </div>
    );
};

export default AdminBlogList;

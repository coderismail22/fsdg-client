import { useForm } from "react-hook-form";
import ImageUpload from "../../Blog/ImageUpload/ImageUpload"
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";

const AdminAppealForSupport = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    // const [title, setTitle] = useState('');
    const [uploadedImageUrl, setUploadedImageUrl] = useState('');

    const onSubmit = async (data) => {
        const postData = { ...data, imgUrl: uploadedImageUrl }; // Combine form data with content and image URL
        console.log(postData);
        // try {
        //     const res = await axios.post('https://fsdg-blog-login-server.vercel.app/api/posts', postData, { headers: { 'Content-Type': 'application/json' } });
        //     console.log('Post created:', res.data);
        //     reset(); // Reset the form after submission
        //     setUploadedImageUrl(''); // Clear the uploaded image URL
        //     Swal.fire('Success!', 'Posted successfully.', 'success');
        // } catch (err) {
        //     Swal.fire('Error!', 'Failed to post.', 'error');
        //     console.error('Error creating post:', err);
        // }
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 border p-2 mx-2">
                {/* Image Upload Section */}
                <div>
                    <label className="block font-medium">Upload Cover Image</label>
                    <ImageUpload setUploadedImageUrl={setUploadedImageUrl} />
                    {uploadedImageUrl === '' && (
                        <p className="text-red-500 text-sm">Image is required</p>
                    )}
                </div>

                {/* Title */}
                <div>
                    <label className="block font-medium">Title</label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded p-2"
                        {...register("title", { required: "Title is required" })}
                    />
                    {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
                </div>

                {/* Description */}
                <div>
                    <label className="block font-medium">Description</label>
                    <textarea
                        type="text"
                        className="w-full border border-gray-300 rounded p-2"
                        {...register("description", { required: "Description is required" })}
                    />
                    {errors.label && <p className="text-red-500 text-sm">{errors.label.message}</p>}
                </div>

                {/* Make Publish Post Button Conditional */}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-black text-white px-4 py-2 rounded font-semibold hover:bg-gray-800 transition"
                    >
                        Publish
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AdminAppealForSupport
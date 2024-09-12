import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import RichTextEditor from "../RichTextEditor/RichTextEditor";
import ImageUpload from "../ImageUpload/ImageUpload";  // Assuming ImageUpload is in the ImageUpload folder

const PublishNewPost = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [content, setContent] = useState('');
    const [uploadedImageUrl, setUploadedImageUrl] = useState('');

    const handleContentChange = (newContent) => {
        setContent(newContent); // Update the state in the parent
    };

    const onSubmit = async (data) => {
        const postData = { ...data, content, imgUrl: uploadedImageUrl }; // Combine form data with content and image URL
        console.log(postData);
        try {
            const res = await axios.post('http://localhost:5000/api/posts', postData, { headers: { 'Content-Type': 'application/json' } });
            console.log('Post created:', res.data);
            reset(); // Reset the form after submission
            setContent(''); // Clear the content editor
            setUploadedImageUrl(''); // Clear the uploaded image URL
        } catch (err) {
            console.error('Error creating post:', err);
        }
    };

    return (
        <div className="mx-10 my-8">
            <h1 className="text-2xl font-semibold mb-6">Publish New Post</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block font-medium">Title</label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded p-2"
                        {...register("title", { required: "Title is required" })}
                    />
                    {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
                </div>

                <div>
                    <label className="block font-medium">Label</label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded p-2"
                        {...register("label", { required: "Label is required" })}
                    />
                    {errors.label && <p className="text-red-500 text-sm">{errors.label.message}</p>}
                </div>

                {/* Image Upload Section */}
                <div>
                    <label className="block font-medium">Upload Cover Image</label>
                    <ImageUpload setUploadedImageUrl={setUploadedImageUrl} />
                    {uploadedImageUrl === '' && (
                        <p className="text-red-500 text-sm">Image is required</p>
                    )}
                </div>

                <div>
                    <label className="block font-medium">Content</label>
                    <RichTextEditor onChangeContent={handleContentChange} />
                </div>

                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-black text-white px-4 py-2 rounded font-semibold hover:bg-gray-800 transition"
                    >
                        Publish Post
                    </button>
                </div>
            </form>

            {/* Preview Section */}
            {content && (
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Preview Content</h2>
                    <div className="border border-gray-300 p-10 rounded">
                        <div dangerouslySetInnerHTML={{ __html: content }} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default PublishNewPost;

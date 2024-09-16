import { useState } from "react";
import { useForm } from "react-hook-form";

const AdminDonate = () => {
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
    <div className="w-9/12 mx-auto text-xl">
      <h1 className="text-center my-2">Bank Details</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 border p-2 mx-2">
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
      <hr className="my-10" />
      <div className="text-center my-5">
        <h1>Existing Bank Details</h1>
        {/* Map Cards */}
      </div>
      <hr className="my-10" />
    </div>
  )
}

export default AdminDonate
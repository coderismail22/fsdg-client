import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const ImageUpload = ({ setUploadedImageUrl }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [uploadSuccess, setUploadSuccess] = useState(false);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
        setPreviewUrl(URL.createObjectURL(file));
        setUploadSuccess(false);  // Reset success state when a new file is selected
    };

    const handleUpload = async () => {
        if (!selectedFile) return;

        setIsLoading(true);  // Start loading state
        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('upload_preset', 'fsdg-blog-image-upload'); // Add your preset name

        try {
            const response = await axios.post(
                'https://api.cloudinary.com/v1_1/dqjpyxkfe/image/upload',
                formData
            );

            if (response.data.secure_url) {
                setUploadSuccess(true);
                setUploadedImageUrl(response.data.secure_url); // Pass URL to parent
                Swal.fire('Success', 'Image uploaded successfully!', 'success');
            }
        } catch (error) {
            Swal.fire('Error', 'Something went wrong. Try uploading again.', 'error');
            setUploadSuccess(false);
        } finally {
            setIsLoading(false);  // End loading state
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            {previewUrl && (
                <div>
                    <img src={previewUrl} alt="Preview" style={{ width: '200px' }} />
                </div>
            )}
            {selectedFile && !uploadSuccess && (
                <button
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 mt-5"
                    onClick={handleUpload}
                    disabled={isLoading}
                >
                    {isLoading ? 'Uploading...' : 'Upload Image'}
                </button>
            )}
        </div>
    );
};

export default ImageUpload;

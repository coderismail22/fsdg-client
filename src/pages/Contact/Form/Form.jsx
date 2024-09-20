import { useState } from 'react';
import emailjs from 'emailjs-com';  // Import from emailjs-com for browser compatibility
import Swal from 'sweetalert2';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    details: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.send(
        'service_8oxq81k', // Replace with your EmailJS service ID
        'template_8hv4a8s', // Replace with your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.details,
        },
        '2tvPg3ksF7tQkzv7I' // Replace with your EmailJS user ID (public key)
      );

      console.log('Email sent successfully:', result.text);
      Swal.fire('Success', 'Email sent successfully!', 'success');
    } catch (error) {
      console.error('Error sending email:', error.text);
      Swal.fire('Failed', 'Failed to send email. Please try again later.', 'error');
    }

    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      details: '',
    });
  };

  return (
    <div className="max-w-[500px] flex flex-col items-center justify-center h-screen mb-20">
      <h1 className="font-yeseva font-bold text-[28px] text-center uppercase">Want to work with us</h1>
      <h1 className="font-yeseva font-bold text-[28px] mb-10 text-center uppercase">Join Now</h1>
      <form className="font-lato text-sm w-[300px] xs:w-[400px] sm:w-[500px] md:w-[600px]" onSubmit={handleSubmit}>
        {/* Text input */}
        <div className="mb-4 w-full">
          <label className="text-[#687279]" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full block border border-slate-500 py-[9px] px-3 pr-4 text-sm focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email input */}
        <div className="mb-4 w-full">
          <label className="text-[#687279]" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full block border border-slate-500 py-[9px] px-3 pr-4 text-sm focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Subject input */}
        <div className="mb-4 w-full">
          <label className="text-[#687279]" htmlFor="subject">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="w-full block border border-slate-500 py-[9px] px-3 pr-4 text-sm focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>

        {/* Message */}
        <div className="mb-4 w-full">
          <label className="text-[#687279]" htmlFor="message">
            Details
          </label>
          <textarea
            id="message"
            rows="4"
            className="w-full block border border-slate-500 py-[9px] px-3 pr-4 text-sm focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none"
            value={formData.details}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="font-montserrat flex gap-2 items-center justify-center text-xl bg-[#FFCD05] w-full h-[50px] p-2 mt-5">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

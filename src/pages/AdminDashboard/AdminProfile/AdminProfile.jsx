import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { Navigate } from 'react-router-dom';
import axios from 'axios';  // assuming you prefer axios for API calls

const AdminProfile = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                const response = await fetch("https://fsdg-blog-login-server.vercel.app/api/admin/auth-check", {
                    method: "GET",
                    credentials: "include",  // Include cookies with the request
                });

                if (response.ok) {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                }
            } catch (error) {
                console.error("Authentication check failed:", error);
                setIsAuthenticated(false);
            } finally {
                setLoading(false);
            }
        };

        checkAuthStatus();
    }, []);

    const handleChangePassword = async () => {
        const { value: formValues } = await Swal.fire({
            title: 'Change Password',
            html:
                '<input type="password" id="old-password" class="swal2-input" placeholder="Old Password">' +
                '<input type="password" id="new-password" class="swal2-input" placeholder="New Password">',
            focusConfirm: false,
            showCancelButton: true,
            preConfirm: () => {
                const oldPassword = document.getElementById('old-password').value;
                const newPassword = document.getElementById('new-password').value;
                if (!oldPassword || !newPassword) {
                    Swal.showValidationMessage('Please enter both passwords');
                    return;
                }
                return { oldPassword, newPassword };
            }
        });

        if (formValues) {
            try {
                // Call your password change API
                const response = await axios.post('https://your-backend-url.com/api/change-password', {
                    oldPassword: formValues.oldPassword,
                    newPassword: formValues.newPassword
                }, { withCredentials: true });

                Swal.fire('Success', 'Password changed successfully', 'success');
            } catch (error) {
                Swal.fire('Error', error.response?.data?.error || 'Password change failed', 'error');
            }
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="h-[80vh] flex flex-col items-center justify-center gap-5 overflow-hidden">
            <h1 className="sm:text-2xl md:text-4xl lg:text-5xl uppercase text-blue-500">Welcome</h1>
            <h1 className="sm:text-3xl md:text-5xl lg:text-6xl uppercase font-bold">To Dashboard</h1>
            {/* <button
                onClick={handleChangePassword}
                className="px-5 py-2 bg-blue-500 text-white rounded-md uppercase font-bold"
            >
                Change Password
            </button> */}
        </div>
    );
};

export default AdminProfile;

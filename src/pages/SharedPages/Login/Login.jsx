import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import logo from "/fsdg.jpg";
import LoginBanner from "../../../components/LoginBanner/LoginBanner";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: "alam.mdfiroj@gmail.com",
            password: "123456"
        }
    });

    const loginHandler = async (formData) => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok) {
                // Handle success (navigate or show success message)
                navigate("/dashboard/admin/admin-profile");  // For example
            } else {
                setErrorMessage(result.message);  // Show error message
            }
        } catch (error) {
            console.error("Login failed:", error);
            setErrorMessage("Something went wrong. Please try again.");
        }
    };

    // Form submission
    const onSubmit = async (formData) => {
        setErrorMessage("");  // Reset error message
        await loginHandler(formData);
    };

    return (
        <div className=" min-h-screen w-11/12 mx-auto py-2">
            <div className="grid grid-cols-2 items-center justify-center">
                <div className="h-full hidden md:block">
                    <LoginBanner />
                </div>
                <div className=" p-8 rounded-xl shadow-md">
                    <Link to={"/"}>
                        <img className="mx-auto w-[150px] mb-5" src={logo} alt="logo" />
                    </Link>

                    <div className="space-y-3 text-center py-2">
                        <h1 className="text-3xl md:text-4xl font-medium text-rose-600">
                            Login
                        </h1>
                    </div>

                    {errorMessage && (
                        <p className="text-red-500 text-center">{errorMessage}</p>
                    )}

                    {/* Login Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                        <div className="space-y-1 text-sm">
                            <label className="block text-rose-700">Email</label>
                            <input
                                type="email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                        message: "Email is not valid",
                                    },
                                })}
                                placeholder="Email"
                                className="w-full px-4 py-3 rounded-md bg-rose-50"
                            />
                            {errors.email && (
                                <p className="text-red-500">{errors.email.message}</p>
                            )}
                        </div>
                        <div className="space-y-1 text-sm">
                            <label className="block text-rose-700">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 6,
                                            message: "Password must be at least 6 characters long",
                                        },
                                    })}
                                    placeholder="Password"
                                    className="w-full px-4 py-3 rounded-md bg-rose-50"
                                />
                                <span
                                    className="absolute right-3 top-3 cursor-pointer"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <AiFillEyeInvisible className="text-rose-700" />
                                    ) : (
                                        <AiFillEye className="text-rose-700" />
                                    )}
                                </span>
                            </div>
                            {errors.password && (
                                <p className="text-red-500">{errors.password.message}</p>
                            )}
                        </div>
                        <button className="block w-full p-3 text-center rounded bg-primary hover:bg-primary/95 text-white">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;

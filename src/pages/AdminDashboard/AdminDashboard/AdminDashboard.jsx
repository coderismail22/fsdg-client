import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { FaBars, FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { TbXboxXFilled } from "react-icons/tb";
import { MdSpaceDashboard } from "react-icons/md";





const AdminDashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <div className={`bg-blue-800 text-white w-64 p-4 lg:relative lg:w-64 ${isSidebarOpen ? "block" : "hidden"} lg:block`}>
                <ul className="space-y-4">
                    <li>
                        <Link to="admin-profile" className="flex items-center gap-2 p-2 hover:bg-blue-600 rounded"><CgProfile />
                            Profile</Link>
                    </li>
                    <li>
                        <Link to="admin-blog-editor" className="flex items-center gap-2 p-2 hover:bg-blue-600 rounded"><IoCloudDownloadOutline />
                            Blog Editor</Link>
                    </li>
                    <li>
                        <Link to="admin-blog-list" className="flex items-center gap-2 p-2 hover:bg-blue-600 rounded"><FaCheckCircle />Published Blogs</Link>
                    </li>
                    <li>

                        <Link to="/" className="p-2 hover:bg-blue-600 rounded flex gap-2 items-center"> <FaHome /> Go to Home</Link>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1">
                {/* Mobile Navbar */}
                <div className="lg:hidden p-4 bg-blue-800 text-white flex justify-between">
                    <h1 className="text-xl flex items-center justify-center gap-2"><MdSpaceDashboard />Admin Dashboard</h1>
                    <FaBars className="cursor-pointer" onClick={toggleSidebar} />
                </div>

                {/* Content Area */}
                <div className="p-8">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;

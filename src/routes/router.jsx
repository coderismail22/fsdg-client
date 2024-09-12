import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/Main/MainLayout";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About/About";
import WhatWeDo from "../pages/WhatWeDo/WhatWeDo/WhatWeDo";
import OurServices from "../pages/OurServices/OurServices/OurServices";
// import Publications from "../pages/Publications/Publications/Publications";
import Contact from "../pages/Contact/Contact/Contact";
import JoinUs from "../pages/JoinUs/JoinUs/JoinUs";
import Stories from "../pages/Stories/Stories/Stories";
import NotFound from "../pages/SharedPages/NotFound/NotFound";
// import Projects from "../pages/Projects/Projects/Projects";
import BlogEditor from "../pages/Blog/BlogEditor/BlogEditor";
import Blogs from "../pages/Blog/Blogs/Blogs";
import Login from "../pages/SharedPages/Login/Login";
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard/AdminDashboard";
import AdminProfile from "../pages/AdminDashboard/AdminProfile/AdminProfile";
import AdminBlogList from "../pages/AdminDashboard/AdminBlogList/AdminBlogList";
import BlogDetail from "../pages/Blog/BlogDetails/BlogDetails";
import RichTextEditor from "../pages/Blog/RichTextEditor/RichTextEditor";
import PublishNewPost from "../pages/Blog/PublishNewPost/PublishNewPost";
import AdminDashboardNavbar from "../components/AdminDashboardNavbar/AdminDashboardNavbar";
// import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/what-we-do",
        element: <WhatWeDo />,
      },
      {
        path: "/services",
        element: <OurServices />,
      },
      {
        path: "/blog",
        element: <BlogEditor />,
      },
      //TODO: Use it in your own portfolio website.
      // {
      //   path: "/viewer-blogs",
      //   element: <Blogs />,
      // },
      {
        path: "blogs/:id",
        element: <BlogDetail />
      },
      // {
      //   path: "/projects",
      //   element: <Projects />,
      // },
      {
        path: "/stories",
        element: <Stories />,
      },
      // {
      //   path: "/publications",
      //   element: <Publications />,
      // },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/join-us",
        element: <JoinUs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "dashboard/admin",
    element: <AdminDashboard />,
    children: [
      {
        path: "admin-profile",
        element: <AdminProfile /> // Wrap each admin route with ProtectedRoute
      },
      {
        path: "admin-rich-text-editor",
        element: <PublishNewPost />
      },
      {
        path: "admin-blog-list",
        element: <AdminBlogList />
      },
    ]
  },
  {
    path: "*",
    element: <NotFound />, // Render NotFound component within MainLayout
  },
]);

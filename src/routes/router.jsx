import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/Main/MainLayout";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About/About";
import WhatWeDo from "../pages/WhatWeDo/WhatWeDo/WhatWeDo";
import OurServices from "../pages/OurServices/OurServices/OurServices";
import Publications from "../pages/Publications/Publications/Publications";
import Contact from "../pages/Contact/Contact/Contact";
import JoinUs from "../pages/JoinUs/JoinUs/JoinUs";
import Stories from "../pages/Stories/Stories/Stories";
import NotFound from "../pages/SharedPages/NotFound/NotFound";
import Projects from "../pages/Projects/Projects/Projects";

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
        path: "/projects",
        element: <Projects />,
      },
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
        path: "*",
        element: <NotFound />, // Render NotFound component within MainLayout
      },
    ],
  },
]);

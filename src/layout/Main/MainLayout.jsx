import { Outlet } from "react-router-dom";
import Navbar from "../../pages/sharedPages/Navbar/Navbar";
import Footer from "../../pages/sharedPages/Footer/Footer";
import ScrollToTop from "../../pages/SharedPages/ScrollToTop/ScrollToTop";
import { TopBanner } from "../../components/TopBanner/TopBanner";

const MainLayout = () => {
  return (
    <div>
      <TopBanner />
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;

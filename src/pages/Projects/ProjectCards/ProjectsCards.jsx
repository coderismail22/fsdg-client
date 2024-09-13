import { useEffect, useState } from "react";
import ProjectCard from "../../../components/ProjectCard/ProjectCard";
import { RotatingLines } from "react-loader-spinner";
import axios from "axios";
import DatePicker from "react-datepicker";
import { BsCalendar } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
const ProjectsCards = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visiblePosts, setVisiblePosts] = useState(8);
  // Initial 2 visible blogs
  // use "setVisibleBlogs" if you want to implement "More Posts" button handler


  const fetchPosts = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("http://localhost:5000/api/posts");
      setPosts(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setError("Something went wrong while fetching the blogs.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);


  


  // Loading Spinner
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <RotatingLines
          visible={true}
          height="46"
          width="46"
          color="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
        />
      </div>
    );
  }

  // Error Message
  if (error) {
    return <p className="text-red-500 text-xl text-center font-bold py-10 border-2 border-red-500 rounded-md m-5">{error}</p>;
  }

  // Load More Button Handler
  const loadMore = () => {
    setVisiblePosts((prevVisibleBlogs) => prevVisibleBlogs + 4); // Load 4 more blogs
  };

  return (

    <div>
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center my-8">
        {/* Search Bar */}
        <div className="relative w-full md:w-1/2">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search blogs by title or content..."
            className="border px-10 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            // onChange={handleSearchChange}
          />
        </div>

        {/* Date Filters */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <div className="relative w-full md:w-auto">
            <DatePicker
              showIcon
              icon={<BsCalendar />
              }
              toggleCalendarOnIconClick
              // selected={startDate}
              // onChange={(date) => setStartDate(date)}
              className="border px-10 py-2 text-center rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholderText="Start Date"
              isClearable
            />
          </div>
          <div className="relative w-full md:w-auto">
            <DatePicker
              showIcon
              icon={<BsCalendar />}
              toggleCalendarOnIconClick

              // selected={endDate}
              // onChange={(date) => setEndDate(date)}
              className="border text-center px-10 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholderText="End Date"
              isClearable
            />
          </div>
        </div>
      </div>
      <div>
        {
          posts.length === 0 ? (<p className="text-center text-red-600 text-xl font-semibold mt-6 border p-10 mx-2">There&apos;s nothing to show</p>
          ) : <div className="grid grid-cols-1 items-center justify-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-10">{posts.slice(0, visiblePosts).map((post, index) => (
            <ProjectCard key={index} post={post} />
          ))}</div >
        }
      </div>


      {/* More Posts Button */}
      {visiblePosts < posts.length && (
        <div className="flex justify-center my-6">
          <button
            onClick={loadMore}
            className="font-montserrat  flex gap-5 items-center justify-center text-xl bg-[#4988d0] hover:bg-[#4e92e0] w-[250px] h-[40px] p-1 rounded-2xl mt-5 text-white"
          >
            More Posts
          </button>

        </div>
      )}</div>
  );
};

export default ProjectsCards;

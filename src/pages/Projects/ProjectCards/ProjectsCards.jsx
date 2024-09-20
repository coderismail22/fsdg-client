import { useEffect, useState } from "react";
import ProjectCard from "../../../components/ProjectCard/ProjectCard";
import { RotatingLines } from "react-loader-spinner";
import axios from "axios";
import DatePicker from "react-datepicker";
import { FaSearch } from "react-icons/fa";
import moment from "moment";

const ProjectsCards = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visiblePosts, setVisiblePosts] = useState(8);
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [startDate, setStartDate] = useState(null);   // Start date filter
  const [endDate, setEndDate] = useState(null);       // End date filter

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("https://fsdg-blog-login-server.vercel.app/api/posts");
      setPosts(data);
      setFilteredPosts(data);  // Initially show all posts
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

  // Function to filter posts by date range and search query
  // Inside the ProjectsCards component
  useEffect(() => {
    let filtered = posts;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by date range using moment
    if (startDate) {
      filtered = filtered.filter((post) => moment(post.date).isSameOrAfter(moment(startDate), 'day'));
    }
    if (endDate) {
      filtered = filtered.filter((post) => moment(post.date).isSameOrBefore(moment(endDate), 'day'));
    }

    setFilteredPosts(filtered);
  }, [searchQuery, startDate, endDate, posts]);
  // Load More Button Handler
  const loadMore = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 4); // Load 4 more posts
  };

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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}  // Update search query on input
          />
        </div>

        {/* Date Filters */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <div className="relative w-full md:w-auto">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="border px-10 py-2 text-center rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholderText="Start Date"
              isClearable
            />
          </div>
          <div className="relative w-full md:w-auto">
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              className="border text-center px-10 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholderText="End Date"
              isClearable
            />
          </div>
        </div>
      </div>

      {/* Posts Display */}
      <div>
        {filteredPosts.length === 0 ? (
          <p className="text-center text-red-600 text-xl font-semibold mt-6 border p-10 mx-2">There is nothing to show</p>
        ) : (
          <div className=" grid grid-cols-1 items-center justify-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-10">
            {filteredPosts.slice(0, visiblePosts).map((post, index) => (
              <ProjectCard key={index} post={post} />
            ))}
          </div>
        )}
      </div>

      {/* More Posts Button */}
      {visiblePosts < filteredPosts.length && (
        <div className="flex justify-center my-6">
          <button
            onClick={loadMore}
            className="font-montserrat flex gap-5 items-center justify-center text-xl bg-[#4988d0] hover:bg-[#4e92e0] w-[250px] h-[40px] p-1 rounded-2xl mt-5 text-white"
          >
            More Posts
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectsCards;

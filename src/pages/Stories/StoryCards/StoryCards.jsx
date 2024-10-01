import { RotatingLines } from "react-loader-spinner";
import StoryCard from "../../../components/StoryCard/StoryCard";
import { useEffect, useState } from "react";
import axios from "axios";

const StoryCards = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visiblePosts, setVisiblePosts] = useState(6);
  // Initial 2 visible blogs
  // use "setVisibleBlogs" if you want to implement "More Posts" button handler


  const fetchPosts = async () => {
    setLoading(true);
    try {
      // TODO: Add Server Url
      const { data } = await axios.get("https://fsdg-latest-v2.vercel.app/api/posts");
      setPosts(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setError("Something went wrong while fetching the blogs.");
    } finally {
      setLoading(false);
    }
  };

  // Load More Button Handler
  const loadMore = () => {
    setVisiblePosts((prevVisibleBlogs) => prevVisibleBlogs + 3); // Load 4 more blogs
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


  return (
    <div>
      {
        posts.length === 0 ? (<p className="text-center text-red-600 text-xl font-semibold border p-10 mx-2">There&apos;s nothing to show</p>
        ) : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center px-16 my-20 gap-5">{posts.slice(0, visiblePosts).map((post) => (
          <StoryCard key={post.index} post={post} />
        ))}</div >
      }

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
      )}
    </div>
  );
};

export default StoryCards;

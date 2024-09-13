import { useEffect, useState } from "react";
import ArticleCard from "../../../components/ArticleCard/ArticleCard";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";

const Articles = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleBlogs, setVisibleBlogs] = useState(6);
  // Initial 2 visible blogs
  // use "setVisibleBlogs" if you want to implement "More Posts" button handler


  const fetchPosts = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("https://fsdg-blog-login-server.vercel.app/api/posts");
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


  return (
    <div >
      {
        posts.length === 0 ? (<p className="text-center text-red-600 text-xl font-semibold mt-6 border p-10 mx-2">There&apos;s nothing to show</p>
        ) : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center px-16 my-20 gap-2">{posts.slice(3, visibleBlogs).map((post) => (
          <ArticleCard key={post.index} post={post} />
        ))}</div >
      }
    </div>
  );
};

export default Articles;

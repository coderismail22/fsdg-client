import { useEffect, useState } from "react";
import HomeCard from "../../../components/HomeCard/HomeCard";
import axios from "axios";

const HomeCards = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
  return (
    <div >
      {posts.map((post) => (
        <HomeCard key={post.index} post={post} />
      ))}
    </div>
  );
};

export default HomeCards;

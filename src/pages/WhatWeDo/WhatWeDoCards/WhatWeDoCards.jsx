import WhatWeDoCard1 from "../../../components/WhatWeDoCard1/WhatWeDoCard1";
// import WhatWeDoCard2 from "../../../components/WhatWeDoCard2/WhatWeDoCard2";



import { RotatingLines } from "react-loader-spinner";
import { useEffect, useState } from "react";
import axios from "axios";


const WhatWeDoCards = () => {
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
    <div className="bg-white mx-2 md:mx-3 lg:mx-4  rounded-lg py-5 overflow-hidden">
      <div className="flex flex-col justify-center items-center">
        {/* Card Type 1 [3*3]*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:justify-center md:items-center gap-5 mt-2 ">
          {
            posts.slice(0, 6).map(post => <WhatWeDoCard1 key={post._id}
              title={post.title}
              imgUrl={post.imgUrl}
              id={post._id}
            />)
          }
        </div>
        {/* Card Type 2 [4*4] */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2  justify-center items-center p-10 sm:p-0  gap-3 mt-2 ">
          {
            posts.slice(4, 8).map(post => <WhatWeDoCard2
              key={post._id}
              id={post._id}
              title={post.title}
              imgUrl={post.imgUrl}
            />)
          }
        </div> */}
      </div>
    </div>
  );
};

export default WhatWeDoCards;

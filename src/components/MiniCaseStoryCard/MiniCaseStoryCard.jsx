import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MiniCaseStoryCard = ({ post, id }) => {
  const { imgUrl, label, title } = post;
  console.log('id', id)

  // Define animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2 * i,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.div
      className="pointer-events-none flex items-center bg-white shadow-lg rounded-lg overflow-hidden w-80 h-32 md:w-72 md:h-36"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      custom={id}
      viewport={{ once: true }}
    >
      {/* Image */}
      <Link
        //  to={postUrl}
        className="flex-shrink-0 w-1/3 h-full">
        <img
          src={imgUrl}
          alt="Sample" className="w-full h-full object-cover" />
      </Link>

      {/* Content */}
      <div className="flex flex-col justify-between p-4 w-2/3">
        {/* Button */}
        <Link
          // to={postUrl}
          className="truncate uppercase bg-[#F7B500] hover:bg-[#B88E19] p-2 rounded-md text-[10px] text-center font-bold font-montserrat"
        >
          <p>{label}</p>
        </Link>

        {/* Title */}
        <Link
          //  to={postUrl} 
          className="text-[12px] font-bold mt-2 text-center">
          {title}
        </Link>
      </div>
    </motion.div>
  );
};

export default MiniCaseStoryCard;

import { useState } from "react";
import { genres } from "../../utils/constants";
import { Tag } from "../Tag/Tag";
import { GenresListProps } from "./GenresList.props";
import { motion } from "framer-motion";
export const GenresList = ({
  className,
  ...props
}: GenresListProps): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false);
  const genresListAnimation = {
    initial: {
      maxHeight: isExpanded ? 630 : 394,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.01,
      },
    },
    animate: {
      maxHeight: isExpanded ? 630 : 394,
    },
  };
  const genresListContentAnimation = {
    initial: { height: 300 },
    animate: { height: 600 },
  };

  return (
    <motion.div
      className={`${className} tablet:flex mobile:hidden w-full max-w-[340px] col gap-2 bg-customWhite rounded-md  p-3`}
      initial={
        isExpanded ? genresListAnimation.initial : genresListAnimation.animate
      }
      animate={
        isExpanded ? genresListAnimation.animate : genresListAnimation.initial
      }
      {...props}
    >
      <h3 className="text-lg text-gray-900 border-b-2 border-indigoGrey">
        Genres
      </h3>
      <motion.div
        className={`flex flex-wrap gap-1 overflow-hidden `}
        initial={
          isExpanded
            ? genresListContentAnimation.initial
            : genresListContentAnimation.animate
        }
        animate={
          isExpanded
            ? genresListContentAnimation.animate
            : genresListContentAnimation.initial
        }
      >
        {genres.map((genre) => (
          <Tag name={genre} key={genre} to={`/catalog?genres=${genre}`} />
        ))}
      </motion.div>
      <button
        onClick={() => setIsExpanded((p) => !p)}
        className="text-indigoGrey font-bold"
      >
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </motion.div>
  );
};

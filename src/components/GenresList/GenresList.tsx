import { useState } from "react";
import { genres } from "../../utils/constants";
import { Tag } from "../Tag/Tag";
import { GenresListProps } from "./GenresList.props";
import { motion } from "framer-motion";
import { genresListAnimation } from "../../utils/motion";
export const GenresList = ({
  className,
  ...props
}: GenresListProps): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false);
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
      <div
        className={`flex flex-wrap gap-1 ${
          isExpanded ? "max-h-full" : "max-h-[300px] overflow-hidden"
        }`}
      >
        {genres.map((genre) => (
          <Tag name={genre} to={`/catalog?genres=${genre}`} />
        ))}
      </div>
      <button
        onClick={() => setIsExpanded((p) => !p)}
        className="text-indigoGrey font-bold"
      >
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </motion.div>
  );
};

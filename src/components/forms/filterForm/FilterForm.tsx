import { useState } from "react";
import { FilterFormProps } from "./FilterForm.props";
import { SlidePanel } from "../../SlidePanel/SlidePanel";
import { Checkbox } from "../../Checkbox/Checkbox";
import { AnimatePresence, motion } from "framer-motion";
import { secondLayerAnimation, slideAnimation } from "../../../utils/motion";
import { comicStatus, comicTypes, genres } from "../../../utils/constants";

export const FilterForm = ({
  className,
  ...props
}: FilterFormProps): JSX.Element => {
  const [secondLayer, setSecondLayer] = useState(false);
  const [genresState, setGenres] = useState<string[]>([]);
  const [typeState, setTypes] = useState<string[]>([]);
  const toggleSecondLayer = () => {
    setSecondLayer((prev) => !prev);
  };

  return (
    <form
      className={`${className}  relative w-[314px] h-full bg-customWhite  max-h-[780px]  p-2 rounded-md `}
      {...props}
    >
      <button
        type="button"
        onClick={toggleSecondLayer}
        className={`flex gap-[1px] w-full ${
          genresState.length == 0 && "justify-between"
        } `}
      >
        Genres
        {!secondLayer && (
          <span className="truncate ml-1 max-w-[200px] text-gray-400">
            {genresState.length > 0 ? genresState : "All"}
          </span>
        )}
      </button>
      <div>
        <span>Type</span>
        <div className="grid grid-cols-2">
          {comicTypes.map((type) => (
            <Checkbox label={type} key={type} />
          ))}
        </div>
      </div>
      <div>
        <span>Comic status</span>
        <div className="grid grid-cols-2">
          {comicStatus.map((type) => (
            <Checkbox label={type} key={type} />
          ))}
        </div>
      </div>
      <div>
        <span>Translate status</span>
        <div className="grid grid-cols-2">
          {comicStatus.map((type) => (
            <Checkbox label={type} key={type} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {secondLayer && (
          <motion.div
            className="absolute top-9 left-2 bg-gray-200 h-[720px] pl-1 overflow-y-scroll"
            {...secondLayerAnimation}
          >
            {genres.map((genre) => (
              <Checkbox
                key={genre}
                label={genre}
                onClick={() => setGenres([...genresState, genre + ", "])}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
};

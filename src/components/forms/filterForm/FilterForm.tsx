import { useState } from "react";
import { FilterFormProps } from "./FilterForm.props";
import { Checkbox } from "../../Checkbox/Checkbox";
import { AnimatePresence, motion } from "framer-motion";
import {
  filterFormAnimation,
  secondLayerAnimation,
} from "../../../utils/motion";
import { comicStatus, comicTypes, genres } from "../../../utils/constants";
import { SubmitHandler, useForm } from "react-hook-form";
import { filterFormType } from "../../../types/forms/filterForm.type";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { filterComics } from "../../../api/comic/comic";
import { FilterFormItem } from "./FilterFormItem/FilterFormItem";
import { AxiosError } from "axios";

export const FilterForm = ({
  className,
  setComics,
  ...props
}: FilterFormProps): JSX.Element => {
  const [secondLayer, setSecondLayer] = useState(false);
  const { register, handleSubmit, reset, getValues } = useForm<filterFormType>({
    defaultValues: {
      genres: [],
      status: [],
      type: [],
      translateStatus: [],
    },
  });
  const genresDisplay = getValues().genres ?? [];
  const toggleSecondLayer = () => {
    setSecondLayer((prev) => !prev);
  };
  const onSubmit: SubmitHandler<filterFormType> = async (data) => {
    try {
      console.log(data);
      const { data: comics } = await filterComics(data);
      setComics(comics);
    } catch (e) {
      if (e instanceof AxiosError) {
        setComics([]);
      }
    }
  };
  const resetForm = () => {
    reset();
  };

  return (
    <motion.form
      className={`${className}  relative  w-[314px]  col gap-4 bg-customWhite  max-h-[780px]  p-2 rounded-md `}
      onSubmit={handleSubmit(onSubmit)}
      initial={filterFormAnimation.initial}
      animate={
        secondLayer ? filterFormAnimation.animate : filterFormAnimation.initial
      }
      exit={filterFormAnimation.exit}
      {...props}
    >
      <button
        type="button"
        onClick={toggleSecondLayer}
        className={`flex gap-[1px] w-full ${
          (genresDisplay.length == 0 || secondLayer) &&
          "justify-between items-center"
        } `}
      >
        Genres
        {!secondLayer && (
          <span className="truncate ml-1 max-w-[200px] text-gray-400">
            {genresDisplay.length > 0
              ? genresDisplay.map((genre, index) => {
                  if (index + 1 == getValues().genres?.length) {
                    return genre;
                  }
                  return genre + ", ";
                })
              : "All"}
          </span>
        )}
        {secondLayer && <AiOutlineArrowLeft />}
      </button>
      <FilterFormItem
        name="Type"
        register={register}
        registerValue="type"
        values={comicTypes}
      />
      <FilterFormItem
        name="Comic status"
        register={register}
        registerValue="status"
        values={comicStatus}
      />
      <FilterFormItem
        name="Translate status"
        register={register}
        registerValue="translateStatus"
        values={comicStatus}
      />
      <AnimatePresence>
        {secondLayer && (
          <motion.div
            key="secondLayer"
            className="absolute top-9 left-2 bg-gray-200 h-[720px] pl-1 overflow-y-scroll"
            {...secondLayerAnimation}
          >
            {genres.map((genre) => (
              <Checkbox key={genre} label={genre} {...register("genres")} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex gap-1 flex-1 w-full center">
        <button
          className="btn btn-sm flex-1 bg-indigoGrey text-customWhite hover:bg-indigoLight "
          type="button"
          onClick={resetForm}
        >
          Clear
        </button>
        <button className="btn btn-sm flex-1 bg-indigoGrey text-customWhite hover:bg-indigoLight ">
          Submit
        </button>
      </div>
    </motion.form>
  );
};

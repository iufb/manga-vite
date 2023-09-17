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
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { updateModalStatus } from "../../../redux/features/modal/modalSlice";
import { useSearchParams } from "react-router-dom";
import {
  setError,
  updateComics,
} from "../../../redux/features/comic/comicSlice";

export const FilterForm = ({
  className,
  ...props
}: FilterFormProps): JSX.Element => {
  const [secondLayer, setSecondLayer] = useState(false);
  const { sortType, direction } = useAppSelector((state) => state.sort);
  const dispatch = useAppDispatch();
  const { width } = useWindowSize();
  const [searchParams, setSearchParams] = useSearchParams();
  const { register, handleSubmit, reset, getValues } = useForm<filterFormType>({
    defaultValues: {
      genres: searchParams.getAll("genres")
        ? searchParams.getAll("genres")
        : [],
      status: searchParams.getAll("status")
        ? searchParams.getAll("status")
        : [],
      type: searchParams.getAll("type"),
      translateStatus: searchParams.getAll("translateStatus"),
    },
  });
  const genresDisplay = getValues().genres ?? [];
  const toggleSecondLayer = () => {
    setSecondLayer((prev) => !prev);
  };
  const onSubmit: SubmitHandler<filterFormType> = async (data) => {
    try {
      const { data: comics } = await filterComics({
        ...data,
        sortType,
        sortDirection: direction,
      });
      setSearchParams(data);
      dispatch(updateComics(comics));
      dispatch(
        updateModalStatus({ modal: "filterModalState", status: "close" })
      );
    } catch (e) {
      if (e instanceof AxiosError) {
        dispatch(setError(true));
      }
    }
  };
  const resetForm = () => {
    reset({ genres: [], status: [], translateStatus: [], type: [] });
    setSearchParams();
  };

  return (
    <motion.form
      className={`${className}  relative tablet:p-2 mobile:p-0 tablet:max-w-[314px]  w-full   col gap-4 bg-customWhite  rounded-md desktop:[--filter-form-width:314px] mobile:[--filter-form-width:100%]  tablet:[--height-from:420px]  tablet:[--height-to:780px]  mobile:[--height-from:95%] mobile:[--height-to:95%] `}
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
            className="absolute top-9 left-2 bg-gray-200 h-[720px] pl-1 overflow-y-scroll [--width-from:0px]  [--heigth-from:0px] mobile:[--width-to:500px] tablet:[--width-to:298px] mobile:[--height-to:656px] tablet:[--height-to:720px]"
            {...secondLayerAnimation}
          >
            {genres.map((genre) => (
              <Checkbox key={genre} label={genre} {...register("genres")} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className={`flex gap-1 flex-1 w-full justify-self-end  ${
          width < 640 && "items-end"
        }`}
      >
        <button
          className="btn btn-sm flex-1 bg-indigoGrey text-customWhite hover:bg-indigoLight "
          type="button"
          onClick={resetForm}
        >
          Clear
        </button>
        <button className="btn btn-sm  flex-1 bg-indigoGrey text-customWhite hover:bg-indigoLight ">
          Submit
        </button>
      </div>
    </motion.form>
  );
};

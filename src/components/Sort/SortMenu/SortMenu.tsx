import { ForwardedRef, forwardRef } from "react";
import { SortType, sortDirectionType } from "../../../types/sort.type";
import { SortMenuProps } from "./SortMenu.props";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  changeSortDirection,
  changeSortType,
} from "../../../redux/features/sort/sortSlice";
import { updateModalStatus } from "../../../redux/features/modal/modalSlice";
import { useWindowSize } from "../../../hooks/useWindowSize";
import {
  sortComics,
  updateComics,
} from "../../../redux/features/comic/comicSlice";
import { getAllComics } from "../../../api/comic/comic";
export type sortValuesType = {
  value: SortType;
  label: string;
};
type sortDirection = {
  value: sortDirectionType;
  label: string;
};
const sortValues: sortValuesType[] = [
  { value: "rate", label: "by rate" },
  { value: "rateCount", label: "by rate count" },
  { value: "createdAt", label: "by created date" },
  { value: "updatedAt", label: "by updated date" },
  { value: "chaptersCount", label: "by chapters count" },
];
const directionValues: sortDirection[] = [
  {
    value: "asc",
    label: "Sort up",
  },
  {
    value: "desc",
    label: "Sort down",
  },
];
export const SortMenu = forwardRef(
  (
    { className, ...props }: SortMenuProps,
    ref?: ForwardedRef<HTMLUListElement>
  ): JSX.Element => {
    const {
      sortType,
      direction: directionState,
      label: labelState,
    } = useAppSelector((state) => state.sort);
    const { width } = useWindowSize();
    const dispatch = useAppDispatch();
    const changeSort = (
      value: SortType,
      label: string,
      newDirection?: sortDirectionType
    ) => {
      dispatch(
        changeSortType({
          sortType: value,
          label,
          direction: newDirection ? newDirection : directionState,
        })
      );

      width < 600 &&
        dispatch(updateModalStatus({ modal: "sort", status: "close" }));
    };
    const changeDirection = (newDirection: sortDirectionType) => {
      dispatch(changeSortDirection({ direction: newDirection }));
      changeSort(sortType, labelState, newDirection);
    };

    return (
      <ul
        ref={ref}
        className={`${className} tablet:absolute tablet:top-8 tablet:right-0 z-30 tablet:bg-gray-200  p-6 rounded-md  col`}
        {...props}
      >
        {sortValues.map((value) => (
          <label key={value.value} className={`cursor-pointer `}>
            <input
              type="radio"
              className="mr-2"
              value={value.value}
              onChange={() =>
                changeSort(value.value, value.label, directionState)
              }
              checked={value.value == sortType}
            />
            {value.label}
          </label>
        ))}
        <hr className="border-1 my-2 border-gray-300 w-full" />
        {directionValues.map(({ value, label }) => (
          <label className={`cursor-pointer `} key={value}>
            <input
              type="radio"
              value={value}
              onChange={() => changeDirection(value)}
              checked={value == directionState}
              className="mr-2"
            />
            {label}
          </label>
        ))}
      </ul>
    );
  }
);

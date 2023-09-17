import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SortType, sortDirectionType } from "../../../types/sort.type";

interface SortState {
  sortType: SortType;
  direction: sortDirectionType;
  label: string;
}

const initialState: SortState = {
  sortType: "rate",
  direction: "desc",
  label: "by rate",
};

export const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    changeSortType: (
      state,
      {
        payload,
      }: PayloadAction<{
        sortType: SortType;
        label: string;
        direction: sortDirectionType;
      }>
    ) => {
      state.sortType = payload.sortType;
      state.label = payload.label;
    },
    changeSortDirection: (
      state,
      { payload }: PayloadAction<{ direction: sortDirectionType }>
    ) => {
      state.direction = payload.direction;
    },
  },
});
export const { changeSortType, changeSortDirection } = sortSlice.actions;
export default sortSlice.reducer;

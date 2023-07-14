import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface PageState {
  pagesQuantity: number;
  currentPage: number;
}

const initialState: PageState = {
  pagesQuantity: 0,
  currentPage: 1,
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setPagesQuantity: (state, action: PayloadAction<number>) => {
      state.pagesQuantity = action.payload;
    },
    nextPage: (state) => {
      if (state.currentPage < state.pagesQuantity) state.currentPage += 1;
    },
    prevPage: (state) => {
      if (state.currentPage > 1) state.currentPage -= 1;
    },
  },
});
export const { setCurrentPage, nextPage, prevPage, setPagesQuantity } =
  pageSlice.actions;
export default pageSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface ChapterState {
  chaptersQuantity: number;
}

// Define the initial state using that type
const initialState: ChapterState = {
  chaptersQuantity: 0,
};
export const chapterSlice = createSlice({
  name: "chapter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setChaptersQuantity: (state, action: PayloadAction<number>) => {
      state.chaptersQuantity = action.payload;
    },
  },
});

export const { setChaptersQuantity } = chapterSlice.actions;

export default chapterSlice.reducer;

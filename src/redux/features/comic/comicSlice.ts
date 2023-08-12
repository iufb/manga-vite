import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IComic } from "../../../types/comic.type";

// Define a type for the slice state
export interface comicState {
  comics: IComic[];
}

// Define the initial state using that type
const initialState: comicState = {
  comics: [],
};
export const comicSlice = createSlice({
  name: "comic",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateComics: (state, { payload }: PayloadAction<IComic[]>) => {
      state.comics = payload;
    },
  },
});

export const { updateComics } = comicSlice.actions;

export default comicSlice.reducer;

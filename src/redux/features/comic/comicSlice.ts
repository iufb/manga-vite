import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IComic } from "../../../types/comic.type";
// Define a type for the slice state
export interface comicState {
  comics: IComic[];
  error: boolean;
}

// Define the initial state using that type
const initialState: comicState = {
  comics: [],
  error: false,
};
export const comicSlice = createSlice({
  name: "comic",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateComics: (state, { payload }: PayloadAction<IComic[]>) => {
      state.error = false;
      state.comics = payload;
    },
    setError: (state, { payload }: PayloadAction<boolean>) => {
      state.comics = [];
      state.error = payload;
    },
  },
});

export const { updateComics, setError } = comicSlice.actions;

export default comicSlice.reducer;

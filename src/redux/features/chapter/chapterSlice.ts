import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { IChapter } from "@/types/types";
import { getChapterByComic } from "@/services/chapter";

// Define a type for the slice state
export interface ChapterState {
  chapters: IChapter[];
  currentChapter?: IChapter;
  prevChapter?: IChapter;
  nextChapter?: IChapter;
  chaptersNumber: number;
}

// Define the initial state using that type
const initialState: ChapterState = {
  chapters: [],
  chaptersNumber: 0,
};
export const chapterSlice = createSlice({
  name: "chapter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addChapters: (state, action: PayloadAction<IChapter[]>) => {
      state.chapters.push(...action.payload);
      state.chaptersNumber = state.chapters.length;
    },
    getCurrentChapter: (state, action: PayloadAction<number>) => {
      state.chapters.map((chapter) => {
        if (chapter.chapterNumber == Number(action.payload)) {
          state.currentChapter = chapter;
        }
        if (chapter.chapterNumber == Number(action.payload) - 1) {
          state.prevChapter = chapter;
        }
        if (chapter.chapterNumber == Number(action.payload) + 1) {
          state.nextChapter = chapter;
        }
      });
    },
  },
});

export const { addChapters, getCurrentChapter } = chapterSlice.actions;

export default chapterSlice.reducer;

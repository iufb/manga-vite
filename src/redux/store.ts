import { configureStore } from "@reduxjs/toolkit";
import chapterReducer from "./features/chapter/chapterSlice";
import modalReducer from "./features/modal/modalSlice";
import pageReducer from "./features/page/pageSlice";
export const store = configureStore({
  reducer: {
    chapter: chapterReducer,
    page: pageReducer,
    modal: modalReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

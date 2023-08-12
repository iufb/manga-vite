import { configureStore } from "@reduxjs/toolkit";
import chapterReducer from "./features/chapter/chapterSlice";
import modalReducer from "./features/modal/modalSlice";
import pageReducer from "./features/page/pageSlice";
import alertReducer from "./features/alert/alertSlice";
import comicReducer from "./features/comic/comicSlice";
export const store = configureStore({
  reducer: {
    comic: comicReducer,
    chapter: chapterReducer,
    page: pageReducer,
    modal: modalReducer,
    alert: alertReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

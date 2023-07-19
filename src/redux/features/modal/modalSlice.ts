import { PayloadAction, createSlice } from "@reduxjs/toolkit";
type statusType = "open" | "close";
export type modalType =
  | "authModalState"
  | "sidebarModalState"
  | "chapterListModalState";
export interface ModalState {
  authModalState: statusType;
  sidebarModalState: statusType;
  chapterListModalState: statusType;
}

const initialState: ModalState = {
  authModalState: "close",
  sidebarModalState: "close",
  chapterListModalState: "close",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    updateModalStatus: (
      state,
      action: PayloadAction<{ status: statusType; modal: modalType }>
    ) => {
      state[action.payload.modal] = action.payload.status;
    },
  },
});
export const { updateModalStatus } = modalSlice.actions;
export default modalSlice.reducer;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
type statusType = "open" | "close";
export type modalType =
  | "authModalState"
  | "sidebarModalState"
  | "chapterListModalState"
  | "previewModalState"
  | "filterModalState"
  | "addToListModal";
export interface ModalState {
  globalModal: statusType;
  authModalState: statusType;
  previewModalState: statusType;
  sidebarModalState: statusType;
  chapterListModalState: statusType;
  filterModalState: statusType;
  addToListModal: statusType;
}

const initialState: ModalState = {
  globalModal: "close",
  previewModalState: "close",
  authModalState: "close",
  sidebarModalState: "close",
  chapterListModalState: "close",
  filterModalState: "close",
  addToListModal: "close",
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
      state.globalModal = action.payload.status;
    },
    updateAllModals: (state, action: PayloadAction<statusType>) => {
      state.chapterListModalState = action.payload;
      state.sidebarModalState = action.payload;
      state.authModalState = action.payload;
    },
  },
});
export const { updateModalStatus, updateAllModals } = modalSlice.actions;
export default modalSlice.reducer;

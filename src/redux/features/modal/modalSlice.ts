import { PayloadAction, createSlice } from "@reduxjs/toolkit";
type statusType = "open" | "close";
export type modalType =
  | "authModalState"
  | "sidebarModalState"
  | "chapterListModalState"
  | "previewModalState"
  | "filterModalState"
  | "addToListModal"
  | "addRate"
  | "sort"
  | "accessModal";
export interface ModalState {
  isModalOpen: boolean;
  authModalState: statusType;
  previewModalState: statusType;
  sidebarModalState: statusType;
  chapterListModalState: statusType;
  filterModalState: statusType;
  addToListModal: statusType;
  addRate: statusType;
  sort: statusType;
  accessModal: statusType;
}

const initialState: ModalState = {
  isModalOpen: false,
  previewModalState: "close",
  authModalState: "close",
  sidebarModalState: "close",
  chapterListModalState: "close",
  filterModalState: "close",
  addToListModal: "close",
  addRate: "close",
  sort: "close",
  accessModal: "close",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    updateModalStatus: (
      state,
      action: PayloadAction<{ status: statusType; modal: modalType }>
    ) => {
      if (action.payload.modal !== "authModalState") {
        //to disable scroll, when modal is open
        if (action.payload.status == "open") {
          state.isModalOpen = true;
        }
        if (action.payload.status == "close") {
          state.isModalOpen = false;
        }
      }
      state[action.payload.modal] = action.payload.status;
    },
  },
});
export const { updateModalStatus } = modalSlice.actions;
export default modalSlice.reducer;

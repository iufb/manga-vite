import { PayloadAction, createSlice } from "@reduxjs/toolkit";
type statusType = "open" | "close";
export interface ModalState {
  authModalState: statusType;
}

const initialState: ModalState = {
  authModalState: "close",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    updateAuthModalStatus: (state, action: PayloadAction<statusType>) => {
      state.authModalState = action.payload;
    },
  },
});
export const { updateAuthModalStatus } = modalSlice.actions;
export default modalSlice.reducer;

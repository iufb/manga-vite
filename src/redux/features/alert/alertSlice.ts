import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type alertType = "warning" | "error" | "success" | "info" | null;

interface AlertState {
  text?: string;
  alertStatus: alertType;
}

const initialState: AlertState = {
  alertStatus: null,
};

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setAlert: (state, action: PayloadAction<AlertState>) => {
      state.text = action.payload.text;
      state.alertStatus = action.payload.alertStatus;
    },
  },
});
export const { setAlert } = alertSlice.actions;
export default alertSlice.reducer;

import { instance } from "../axios-client";
import { formType } from "../../types/forms/authform.type";
export const registerUser = (data: formType) => {
  return instance().post("/auth/register", data);
};
export const loginUser = (data: formType) => {
  return instance().post("/auth/login", data);
};

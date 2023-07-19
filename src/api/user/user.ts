import { editProfileType } from "../../types/forms/editProfileForm.type";
import { instance } from "../axios-client";

export const getUser = () => {
  return instance().get("/user");
};

export const updateUser = (data: editProfileType) => {
  return instance().patch("/user", data);
};

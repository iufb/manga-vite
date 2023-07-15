import { SubmitHandler, useForm } from "react-hook-form";
import { editProfileFormType } from "../../../types/forms/editProfileForm.type";
import { EditProfileFormProps } from "./EditProfileForm.props";
import { useState } from "react";
import { mutate, useSWRConfig } from "swr";
import { useAppDispatch } from "../../../redux/hooks";
import { setAlert } from "../../../redux/features/alert/alertSlice";
import { AxiosError } from "axios";
import { updateUser } from "../../../api/user/user";
import { upload } from "../../../api/upload/upload";
import { ImageForm } from "../imageform/ImageForm";
import { ImagePreview } from "../../ImagePreview/ImagePreview";
import { useAuth } from "../../../hooks";

export const EditProfileForm = ({
  className,
  ...props
}: EditProfileFormProps) => {
  const { register, handleSubmit } = useForm<editProfileFormType>();
  const [error, setError] = useState("");
  const { user } = useAuth();
  const [image, setImage] = useState<File | Blob | null | undefined>(null);
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<editProfileFormType> = async (data) => {
    try {
      const imageUrl = await upload({ type: "avatar", file: image });
      if (imageUrl) {
        updateUser({
          name: data.name,
          avatar: imageUrl.data.url,
        });
      }
      mutate("user");
      dispatch(
        setAlert({
          text: "Profile information updated successfully",
          alertStatus: "success",
        })
      );
      setImage(undefined);
    } catch (e) {
      if (e instanceof AxiosError) {
        setError(e.response?.data.message);
      }
    }
  };
  const deleteAvatar = async () => {
    updateUser({ avatar: "" });
    mutate("user");
  };
  return (
    <form
      className={`${className} w-full max-w-[900px]   col gap-4 mobile:px-4 tablet:px-10  desktop:tablet:px-20`}
      {...props}
      onSubmit={handleSubmit(onSubmit)}
    >
      <ImageForm
        deleteAvatar={deleteAvatar}
        image={image}
        setImage={setImage}
        label="Avatar: "
        imageFor="default"
      />

      <label className="input-group ">
        <span className="text-md mobile:text-sm text-indigoGrey">Name</span>
        <input
          className="input input-bordered  flex-1 mobile:pr-0"
          {...register("name")}
        />
      </label>
      {error && <p className=" text-red-600">{error}</p>}
      <button type="submit" className="btn ">
        Save
      </button>
    </form>
  );
};

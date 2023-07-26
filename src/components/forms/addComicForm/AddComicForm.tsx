import { SubmitHandler, useForm } from "react-hook-form";
import { AddComicFormProps } from "./AddComicForm.props";
import { addComicFormType } from "../../../types/forms/addComicForm.type";
import { useState } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import { upload } from "../../../api/upload/upload";
import { AxiosError } from "axios";
import { setAlert } from "../../../redux/features/alert/alertSlice";
import { ImageForm } from "../imageform/ImageForm";
import { Input } from "../../inputs/Input/Input";
import {
  genres,
  newComicInputs,
  newComicSelects,
} from "../../../utils/constants";
import { MultiSelect } from "../../Select/MultiSelect/MultiSelect";
import { Select } from "../../Select/Select";
import { createComic } from "../../../api/comic/comic";
import { useNavigate } from "react-router-dom";
import { Textarea } from "../../inputs/Textarea/Textarea";

export const AddComicForm = ({
  className,
  ...props
}: AddComicFormProps): JSX.Element => {
  const { register, handleSubmit } = useForm<addComicFormType>();
  const [comicCover, setComicCover] = useState<File | null | Blob | undefined>(
    null
  );
  const [comicBg, setComicBg] = useState<File | null | Blob | undefined>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const onSubmit: SubmitHandler<addComicFormType> = async (data) => {
    try {
      const uploadedImage = await upload({
        type: "comic",
        file: comicCover,
        secondFile: comicBg,
        params: {
          comicName: data.title.replace(/\s/g, ""),
        },
      });
      if (uploadedImage) {
        const comic = await createComic({
          ...data,
          genres: selectedGenres,
          comicCover: uploadedImage.data.comicCover,
          comicBg: uploadedImage.data.comicBg,
        });
        navigate(`/comic/${comic.data._id}`);
      }
    } catch (e) {
      if (e instanceof AxiosError) {
        dispatch(
          setAlert({ text: e.response?.data.message, alertStatus: "error" })
        );
      }
    }
  };
  return (
    <form
      className={`${className} w-full  h-full  col gap-4 mobile:px-4 tablet:px-10  desktop:px-20 `}
      {...props}
      onSubmit={handleSubmit(onSubmit)}
    >
      <ImageForm
        imageFor="default"
        image={comicCover}
        setImage={setComicCover}
        label="Comic cover:"
      />
      <ImageForm
        imageFor="bg"
        image={comicBg}
        setImage={setComicBg}
        label="Comic background:"
      />
      {newComicInputs.map(({ label, registerProp }) => (
        <Input
          key={label}
          title={label}
          {...register(registerProp, { required: true })}
        />
      ))}
      <MultiSelect
        items={genres}
        title="Genres"
        state={selectedGenres}
        setState={setSelectedGenres}
      />
      <div className="tablet:flex-row gap-2 mobile:col w-full h-full  ">
        {newComicSelects.map(({ items, defaultValue, registerProp }) => (
          <Select
            key={defaultValue}
            items={items}
            {...register(registerProp)}
          />
        ))}
      </div>
      <Textarea
        {...register("description", { required: true })}
        label="Description"
      />
      <button
        type="submit"
        className="btn btn-sm bg-indigoGrey text-customWhite hover:bg-indigoLight w-20"
      >
        Create
      </button>
    </form>
  );
};

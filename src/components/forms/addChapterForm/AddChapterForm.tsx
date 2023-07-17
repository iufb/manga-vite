import { SubmitHandler, useForm } from "react-hook-form";
import { AddChapterFormProps } from "./AddChapterForm.props";
import { useState } from "react";
import { AxiosError } from "axios";
import { addChapterFormType } from "../../../types/forms/addChapterForm.type";
import { useNavigate, useParams } from "react-router-dom";
import { createChapter } from "../../../api/chapter/chapter";
import { useAppDispatch } from "../../../redux/hooks";
import { setAlert } from "../../../redux/features/alert/alertSlice";
import { Input } from "../../inputs/Input/Input";
import { ChapterPreview } from "../../ChapterPreview/ChapterPreview";
export const AddChapterForm = ({
  className,
  ...props
}: AddChapterFormProps) => {
  const { register, handleSubmit } = useForm<addChapterFormType>();
  const [pages, setPages] = useState<string[] | null>(null);
  const { comicId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<addChapterFormType> = async (data) => {
    if (!pages || !comicId) return;
    createChapter({
      name: data.name,
      chapterNumber: Number(data.chapterNumber),
      comicId,
      pages,
    })
      .then(() => {
        console.log({ ...data, comicId, pages });
        navigate(`/comic/${comicId}`);
      })
      .catch((e) => {
        if (e instanceof AxiosError) {
          dispatch(
            setAlert({ text: e.response?.data.message, alertStatus: "error" })
          );
        }
      });
  };
  const setFiles = (files: string[]) => {
    setPages(files);
  };
  return (
    <>
      <form
        className={`${className}  max-w-[1320px] w-full flex flex-col gap-4 h-full my-10`}
        {...props}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex gap-2 w-full">
          <Input
            title="№"
            type="number"
            className="input-sm w-fit "
            {...register("chapterNumber", { required: true })}
          />
          <Input
            title="Chapter's name"
            {...register("name")}
            className="input-sm flex-1"
          />
          <button className="btn btn-sm " type="submit">
            Submit
          </button>
        </div>
        <ChapterPreview pages={pages} setFiles={setFiles} />
      </form>
    </>
  );
};
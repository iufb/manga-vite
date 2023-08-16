import { ChangeEvent, useState } from "react";
import { FileInputProps } from "./FileInput.props";
import { useParams } from "react-router-dom";
import { ModalContainer } from "../../modals/ModalContainer/ModalContainer";
import { bytesToMB } from "../../../utils/helpers";
import { ProgressBar } from "../../ProgressBar/ProgressBar";
import { upload } from "../../../api/upload/upload";
import { Loader } from "../../Loader/Loader";

export const FileInput = ({
  setFiles,
  label,
  className,
  ...props
}: FileInputProps): JSX.Element => {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const { comicId } = useParams();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target?.files[0]);
    e.target.value = "";
    e.target.files = null;
  };
  const uploadZip = async () => {
    setProgress(0);
    setLoading(true);
    upload({
      type: "chapter",
      file,
      params: {
        comicName: comicId,
      },
      config: {
        onUploadProgress: (progressEvent: ProgressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setProgress(percentCompleted);
        },
      },
    })?.then(({ data }: { data: string[] }) => {
      setFiles(data);
      setFile(null);
      setLoading(false);
    });
  };
  return (
    <div className={`${className} text-center`} {...props}>
      <label
        htmlFor="file"
        className="cursor-pointer  text-2xl text-indigoGrey font-bold"
      >
        {label}
      </label>
      <input
        type="file"
        accept=".zip"
        id="file"
        hidden
        onChange={handleChange}
      />
      {file && (
        <ModalContainer>
          <div className="w-full h-fit max-h-[230px]  max-w-[500px] bg-indigoGrey center  flex-col gap-4 p-5 rounded-md">
            <div className="w-full flex flex-col gap-1">
              <div className="flex gap-2 text-white">
                <span className="flex-1 truncate">{file.name}</span>
                <span>{bytesToMB(file.size)} MB</span>
              </div>
              <div className="flex gap-2 center">
                <ProgressBar percentage={progress} />
                {loading && <Loader size="sm" />}
              </div>
            </div>
            <div className="flex gap-2 ">
              <button className="btn btn-sm" onClick={uploadZip}>
                Upload
              </button>
              <button className="btn btn-sm" onClick={() => setFile(null)}>
                Dismiss
              </button>
            </div>
          </div>
        </ModalContainer>
      )}
    </div>
  );
};

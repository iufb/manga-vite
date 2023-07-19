import { useState } from "react";
import { ImagePreview } from "../ImagePreview/ImagePreview";
import { AiOutlineClose } from "react-icons/ai";
import { ChapterPreviewProps } from "./ChapterPreview.props";
import { FaSearchPlus } from "react-icons/fa";
import { FileInput } from "../inputs/FileInput/FileInput";
import { ModalContainer } from "../modals/ModalContainer/ModalContainer";

export const ChapterPreview = ({
  pages,
  setFiles,
  className,
  ...props
}: ChapterPreviewProps) => {
  const [selectedPage, setSelectedPage] = useState(0);
  const [expandImage, setExpandImage] = useState(false);
  return (
    <div
      className={` ${className} w-full min-h-[500px] h-full  bg-white center p-10`}
      {...props}
    >
      {pages ? (
        <div className="flex h-full flex-wrap gap-2 justify-center ">
          {pages.map((page, idx) => (
            <ImagePreview
              src={page}
              key={page}
              width={100}
              height={150}
              className=" border-4 max-h-40 rounded-md border-gray-400 p-2 overflow-hidden"
            >
              <button
                type="button"
                className="absolute  bottom-1 p-1 right-1 bg-indigoGrey rounded-md text-white"
                onClick={() => {
                  setSelectedPage(idx);
                  setExpandImage(true);
                }}
              >
                <FaSearchPlus />
              </button>
            </ImagePreview>
          ))}
        </div>
      ) : (
        <FileInput setFiles={setFiles} label="Select zip file with chapter" />
      )}
      {expandImage && pages && (
        <ModalContainer>
          <ImagePreview src={pages[selectedPage]} width={500} height={600}>
            <button
              onClick={() => setExpandImage(false)}
              className="absolute  top-1 right-1 p-2 bg-indigoGrey bg-opacity-50 hover:bg-opacity-100 text-white "
            >
              <AiOutlineClose />
            </button>
          </ImagePreview>
        </ModalContainer>
      )}
    </div>
  );
};

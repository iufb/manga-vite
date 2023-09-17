import { useNavigate } from "react-router-dom";
import { listArray } from "../../../utils/constants";
import { Dropdown } from "../../Dropdown/Dropdown";
import { ComicButtonProps } from "./ComicButton.props";
import { useEffect, useState } from "react";
import { listType, lastChapterType } from "../../../types/list.type";
import { addComicToList } from "../../../api/list/list";
import { useAuth } from "../../../hooks";
import useSWR from "swr";
import fetcher from "../../../api/axios-client";
import { BsBookmark } from "react-icons/bs";
import { useAppDispatch } from "../../../redux/hooks";
import { updateModalStatus } from "../../../redux/features/modal/modalSlice";
import { AiOutlineFolder } from "react-icons/ai";
export const ComicButton = ({
  comic,
  className,
  ...props
}: ComicButtonProps): JSX.Element => {
  const { user } = useAuth();
  const { data } = useSWR<{ listType: listType; lastChapter: lastChapterType }>(
    `list/${comic._id}/${user?._id}`,
    fetcher
  );
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [list, setList] = useState<listType>("add to list");
  const [color, setColor] = useState<string>("bg-indigoGrey");
  const changeColor = (list: listType) => {
    switch (list) {
      case "reading":
        setColor("bg-green-500 hover:bg-green-600");
        break;
      case "dropped":
        setColor("bg-red-500 hover:bg-red-600");
        break;
      case "finished":
        setColor("bg-green-800 hover:bg-green-700");
        break;
      case "planned":
        setColor("bg-blue-500 hover:bg-blue-600");
        break;
      default:
        setColor("bg-indigoGrey hover:bg-indigoLight");
    }
  };
  const getButtonText = () => {
    if (comic.chaptersCount == 0) {
      return "No chapters yet";
    } else {
      if (data?.lastChapter.chapter !== 1 || data?.lastChapter.page !== 1) {
        return "Continue";
      }
      return "Start reading";
    }
  };
  const navigatoToChapter = () => {
    const lastChapter = data?.lastChapter.chapter
      ? data.lastChapter.chapter
      : 1;
    const page = data?.lastChapter.page ? data.lastChapter.page : 1;
    navigate(`/reader/${comic._id}/${lastChapter}?page=${page}`);
  };
  const openListModal = () => {
    if (!user) {
      dispatch(updateModalStatus({ modal: "accessModal", status: "open" }));
      return;
    }
    dispatch(updateModalStatus({ modal: "addToListModal", status: "open" }));
  };
  const onSelect = (value: listType) => {
    if (!user) {
      dispatch(updateModalStatus({ modal: "accessModal", status: "open" }));
      return;
    }
    setList(value);
    changeColor(value);
    addComicToList({
      comic: comic._id,
      user: user._id,
      listType: value,
      lastChapter: { chapter: 1, page: 1 },
    });
  };

  useEffect(() => {
    if (data) {
      setList(data.listType);
      changeColor(data.listType);
    }
  }, [data?.listType]);
  return (
    <div
      className={`${className} z-20 desktop:max-w-[250px]  desktop:col  mobile:flex  gap-1 mobile:w-full desktop:static desktop:p-0 desktop:bg-inherit  mobile:fixed mobile:bottom-0 mobile:bg-customWhite mobile:px-2 mobile:py-3 `}
      {...props}
    >
      <button
        disabled={comic.chaptersCount == 0}
        onClick={navigatoToChapter}
        className="flex-1 center bg-indigoGrey text-customWhite py-1 rounded-md hover:bg-indigoLight disabled:bg-gray-500 disabled:cursor-not-allowed "
      >
        {getButtonText()}
      </button>
      <button
        onClick={openListModal}
        className={` flex-1  mobile:flex gap-2 desktop:hidden center rounded-md  capitalize ${color}  text-customWhite py-1 `}
      >
        <BsBookmark />
        <span>{list}</span>
      </button>
      <Dropdown
        icon={<AiOutlineFolder />}
        height={135}
        values={listArray}
        valueColor={color}
        selectedValue={list ? list : "add to list"}
        selectValue={onSelect}
        className="mobile:hidden desktop:block"
      />
    </div>
  );
};

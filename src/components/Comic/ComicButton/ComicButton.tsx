import { useNavigate } from "react-router-dom";
import { listArray } from "../../../utils/constants";
import { Dropdown } from "../../Dropdown/Dropdown";
import { ComicButtonProps } from "./ComicButton.props";
import { useEffect, useState } from "react";
import { listType } from "../../../types/list.type";
import { addComicToList } from "../../../api/list/list";
import { useAuth } from "../../../hooks";
import useSWR from "swr";
import fetcher from "../../../api/axios-client";
import { BsBookmark } from "react-icons/bs";
import { useAppDispatch } from "../../../redux/hooks";
import { updateModalStatus } from "../../../redux/features/modal/modalSlice";
export const ComicButton = ({
  comic,
  className,
  ...props
}: ComicButtonProps): JSX.Element => {
  const { user } = useAuth();
  const { data } = useSWR(`list/${comic._id}/${user?._id}`, fetcher);
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
  const onSelect = (value: listType) => {
    setList(value);
    changeColor(value);
    if (user) {
      addComicToList({
        user: user._id,
        comic: comic._id,
        listType: value,
      });
    }
  };

  useEffect(() => {
    if (data) {
      setList(data);
      changeColor(data);
    }
  }, [data]);
  return (
    <div
      className={`${className} z-20 desktop:max-w-[250px]  desktop:col  mobile:flex  gap-2 mobile:w-full desktop:static desktop:p-0 desktop:bg-inherit  mobile:fixed mobile:bottom-0 mobile:bg-customWhite mobile:px-2 mobile:py-3 `}
      {...props}
    >
      <button
        disabled={comic.chaptersCount == 0}
        onClick={() => navigate(`/reader/${comic._id}/1?page=1`)}
        className="flex-1 center bg-indigoGrey text-customWhite py-1 rounded-md hover:bg-indigoLight disabled:bg-gray-500 disabled:cursor-not-allowed "
      >
        Start reading
      </button>
      <button
        onClick={() =>
          dispatch(
            updateModalStatus({ modal: "addToListModal", status: "open" })
          )
        }
        className={` flex-1  mobile:flex gap-2 desktop:hidden center rounded-md  capitalize ${color}  text-customWhite py-1 `}
      >
        <BsBookmark />
        <span>{list}</span>
      </button>
      <Dropdown
        values={listArray}
        valueColor={color}
        selectedValue={list}
        selectValue={onSelect}
        className="mobile:hidden desktop:block"
      />
    </div>
  );
};

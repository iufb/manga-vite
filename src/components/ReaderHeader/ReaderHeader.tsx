import { Link, useParams } from "react-router-dom";
import { ChapterNavigation } from "./ChapterNavigation/ChapterNavigation";
import { ReaderHeaderProps } from "./ReaderHeader.props";
import { RxHamburgerMenu } from "react-icons/rx";
import useSWR from "swr";
import fetcher from "../../api/axios-client";
import { useAppDispatch } from "../../redux/hooks";
import { updateModalStatus } from "../../redux/features/modal/modalSlice";
import { useEffect, useState } from "react";
import { setChaptersQuantity } from "../../redux/features/chapter/chapterSlice";
import { motion } from "framer-motion";
import { transition } from "../../utils/motion";
import { Bookmark } from "../Bookmark/Bookmark";
export const ReaderHeader = ({
  className,
  ...props
}: ReaderHeaderProps): JSX.Element => {
  const { comicId } = useParams();
  const dispatch = useAppDispatch();
  const { data } = useSWR<{ chaptersQuantity: number; comicName: string }>(
    `chapter/reader/${comicId}`,
    fetcher
  );
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  let prevScrollY = 0;
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > prevScrollY) {
      setScrollDirection("down");
    }
    if (currentScrollY < prevScrollY) {
      setScrollDirection("up");
    }
    prevScrollY = currentScrollY;
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (data) dispatch(setChaptersQuantity(data.chaptersQuantity));
  }, [data]);
  return (
    <motion.div
      className={`${className} w-full h-12 sticky top-0  z-40 flex px-3 gap-3 bg-gray-700 text-customWhite items-center overflow-hidden `}
      {...props}
      initial={{ opacity: 0 }}
      animate={{
        opacity: scrollDirection == "up" ? 1 : 0,
        transition: { ...transition },
      }}
    >
      {data && (
        <>
          <button
            className="active:scale-110 active:transition active:ease-in-out readerLinkHover p-2"
            onClick={() =>
              dispatch(
                updateModalStatus({
                  status: "open",
                  modal: "sidebarModalState",
                })
              )
            }
          >
            <RxHamburgerMenu className="w-6 h-6 text-customWhite " />
          </button>
          <Link
            to={`/comic/${comicId}`}
            className="readerLinkHover p-2 mobile:p-1 mobile:text-sm tablet:text-lg max-w-[300px] truncate"
          >
            {data.comicName}
          </Link>
          <ChapterNavigation chaptersQuantity={data.chaptersQuantity} />
          <Bookmark />
        </>
      )}
    </motion.div>
  );
};

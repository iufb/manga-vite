import { useEffect, useState } from "react";
import { useAuth } from "../../hooks";
import { IListComic } from "../../types/comic.type";
import { listType } from "../../types/list.type";
import { listArray } from "../../utils/constants";
import { Tabs } from "../Tabs/Tabs";
import { UserComicsShelfProps } from "./UserComicsShelf.props";
import { getComicsByList } from "../../api/comic/comic";
import { ComicCard } from "../Comic/ComicCard/ComicCard";
import { ComicsGrid } from "../ComicsGrid/ComicsGrid";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { PiExcludeSquareFill } from "react-icons/pi";

export const UserComicsShelf = ({
  className,
  ...props
}: UserComicsShelfProps): JSX.Element => {
  const { user } = useAuth();
  const [layout, setLayout] = useState<"tile" | "list">("list");
  const [activeTab, setActiveTab] = useState<listType>(() => listArray[0]);
  const [comics, setComics] = useState<IListComic[]>([]);
  useEffect(() => {
    if (user) {
      getComicsByList(user._id, activeTab ? activeTab : "reading")
        .then(({ data }) => {
          setComics(data);
        })
        .catch((e) => {
          console.log(e);
          setComics([]);
        });
    }
  }, [activeTab, user]);
  const changeTab = (tab: listType) => {
    setActiveTab(tab);
  };
  return (
    <div className={`${className} col gap-3`} {...props}>
      <Tabs
        tabs={listArray}
        changeTab={changeTab}
        activeTab={activeTab}
        tabStyle="boxed"
      />
      <div className="text-2xl bg-customWhite w-fit p-2 rounded-md flex gap-2 center cursor-pointer">
        <AiOutlineUnorderedList
          onClick={() => setLayout("list")}
          className={`${layout == "list" && "bg-gray-300 "} p-1 rounded-md`}
        />
        <PiExcludeSquareFill
          onClick={() => setLayout("tile")}
          className={`${layout == "tile" && "bg-gray-300"} p-1 rounded-md`}
        />
      </div>
      <ComicsGrid>
        {comics && comics.length > 0 ? (
          comics.map(
            ({ comic, comicData, lastChapter, updatedAt, chaptersCount }) => (
              <ComicCard
                id={comic}
                comicLayout={layout}
                lastChapter={lastChapter}
                chaptersCount={chaptersCount}
                createdAt={updatedAt}
                key={comic}
                cover={comicData.comicCover}
                name={comicData.title}
              />
            )
          )
        ) : (
          <div className="text-gray-400 text-lg">List is empty.</div>
        )}
      </ComicsGrid>
    </div>
  );
};

import { useEffect, useState } from "react";
import { useAuth } from "../../hooks";
import { IListComic } from "../../types/comic.type";
import { listType } from "../../types/list.type";
import { listArray } from "../../utils/constants";
import { Loader } from "../Loader/Loader";
import { Tabs } from "../Tabs/Tabs";
import { UserComicsShelfProps } from "./UserComicsShelf.props";
import { getComicsByList } from "../../api/comic/comic";
import { ComicCard } from "../Comic/ComicCard/ComicCard";
import { ComicsGrid } from "../ComicsGrid/ComicsGrid";

export const UserComicsShelf = ({
  className,
  ...props
}: UserComicsShelfProps): JSX.Element => {
  const { user } = useAuth();
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
  console.log(activeTab, comics);
  return (
    <div className={`${className} col gap-3`} {...props}>
      <Tabs
        tabs={listArray}
        changeTab={changeTab}
        activeTab={activeTab}
        tabStyle="boxed"
      />
      <ComicsGrid>
        {comics && comics.length > 0 ? (
          comics.map(({ comic, comicData }) => (
            <ComicCard
              key={comic}
              cover={comicData.comicCover}
              name={comicData.title}
              to={`/comic/${comic}`}
            />
          ))
        ) : (
          <div>No comics there.</div>
        )}
      </ComicsGrid>
    </div>
  );
};

import { ComicTabContentProps } from "./ComicTabContent.props";
import { Tabs } from "../../Tabs/Tabs";
import { Tag } from "../../Tag/Tag";
import { Suspense, useState } from "react";
import useSWR from "swr";
import { useNavigate, useParams } from "react-router-dom";
import { chapterType } from "../../../types/chapter.type";
import fetcher from "../../../api/axios-client";
import { Comment } from "../../Comment/Comment";
import { Loader } from "../../Loader/Loader";
const tabs = ["Information", "Chapters", "Comments"];
export const ComicTabContent = ({
  description,
  genres,
  id,
  className,
  ...props
}: ComicTabContentProps): JSX.Element => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const { comicId } = useParams();
  const navigate = useNavigate();
  const { data: chapters } = useSWR<chapterType[]>(
    `chapter/byComic/${comicId}`,
    fetcher
  );

  const [showMoreText, setShowMoreText] = useState<boolean>(false);
  const isLargeText = description.length > 350;
  const changeTab = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div
      className={`${className} w-full rounded-md bg-white flex flex-col gap-4 p-4 h-fit mt-4`}
      {...props}
    >
      <Tabs
        tabs={tabs}
        changeTab={changeTab}
        activeTab={activeTab}
        tabStyle="lifted"
      />
      {activeTab == "Information" && (
        <div className="flex flex-col gap-4">
          <p>
            {showMoreText || !isLargeText
              ? description
              : `${description.substring(0, 350)}...`}
            {isLargeText && (
              <button
                className="text-indigoGrey font-bold ml-2"
                onClick={() => setShowMoreText((prev) => !prev)}
              >
                {showMoreText ? "Show less" : "Show more"}
              </button>
            )}
          </p>
          <div className="flex gap-3 flex-wrap ">
            {genres.map((genre) => (
              <Tag name={genre} key={genre} to={`/catalog?genres=${genre}`} />
            ))}
          </div>
        </div>
      )}

      {activeTab == "Chapters" &&
        (chapters && chapters?.length > 0 ? (
          <div className="flex flex-col gap-2 px-3 cursor-pointer">
            {chapters.map((chapter) => (
              <div
                onClick={() => {
                  navigate(`/reader/${id}/${chapter.chapterNumber}?page=1`);
                }}
                key={chapter._id}
                className="flex gap-2 hover:bg-gray-300 px-2"
              >
                <span className="">Chapter {chapter.chapterNumber}.</span>
                <span className="mobile:hidden tablet:block">
                  {chapter.name}
                </span>
                <span className="flex-1 text-end">
                  {new Date(chapter.createdAt)
                    .toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })
                    .toString()}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-gray-400 center ">Chapters not found.</div>
        ))}
      {activeTab == "Comments" && (
        <Suspense fallback={<Loader size="md" />}>
          <Comment type="comic" className="tablet:max-w-full" />
        </Suspense>
      )}
    </div>
  );
};

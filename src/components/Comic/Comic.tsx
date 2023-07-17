import useSWR from "swr";
import fetcher from "../../api/axios-client";
import { useParams } from "react-router-dom";
import { IComic } from "../../types/comic.type";
import { ComicProps } from "./Comic.props";
import { ComicSidebar } from "./ComicSidebar/ComicSidebar";
import { ComicContent } from "./ComicContent/ComicContent";

export const Comic = ({ className, ...props }: ComicProps) => {
  const { comicId } = useParams();
  console.log(comicId, "comnicId");
  const { data: comic } = useSWR<IComic>(`comic/${comicId}`, fetcher);
  return (
    <div className={`${className} `} {...props}>
      <div
        className="w-full h-[350px] relative before:absolute before:w-full before:h-full before:bg-gray-600 before:bg-opacity-70   "
        style={{
          backgroundImage: `url(${import.meta.env.VITE_API_HOST}/${
            comic?.comicBg
          })`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div className="mx-auto max-w-[1320px] -mt-20 flex gap-10  ">
        <ComicSidebar comic={comic} />
        <ComicContent comic={comic} />
      </div>
    </div>
  );
};

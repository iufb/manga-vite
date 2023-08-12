import useSWR from "swr";
import fetcher from "../../api/axios-client";
import { useParams } from "react-router-dom";
import { IComic } from "../../types/comic.type";
import { ComicProps } from "./Comic.props";
import { ComicContent } from "./ComicContent/ComicContent";
import { Loader } from "../Loader/Loader";

export const Comic = ({ className, ...props }: ComicProps) => {
  const { comicId } = useParams();
  const { data: comic, isLoading } = useSWR<IComic>(
    `comic/${comicId}`,
    fetcher
  );
  console.log(comic);
  return (
    <div className={`${className}  grid `} {...props}>
      <div
        className="w-full h-[350px]  relative before:absolute before:w-full before:h-full before:bg-gray-600 before:bg-opacity-70   "
        style={{
          backgroundImage: `url(${import.meta.env.VITE_API_HOST}/${
            comic?.comicBg
          })`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div className="mx-auto max-w-[1200px] desktop:-mt-20 mobile:-mt-80   w-full h-full gap-10  ">
        {isLoading && <Loader size="lg" />}
        {comic && <ComicContent comic={comic} />}
      </div>
    </div>
  );
};

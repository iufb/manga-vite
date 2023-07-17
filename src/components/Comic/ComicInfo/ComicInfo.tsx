import { comicFormType } from "../../../types/comic.type";
import { ComicInfoProps } from "./ComicInfo.props";
import { ComicInfoListValue } from "./ComicInfoListValue";

export const ComicInfo = ({
  className,
  comic,
  ...props
}: ComicInfoProps): JSX.Element => {
  const info = comic && [
    { name: "Type", value: comic["type"] },
    {
      name: "Status",
      value: comic["status"],
    },
    {
      name: "Translate status",
      value: comic["translateStatus"],
    },
    {
      name: "Author",
      value: comic["author"],
    },
    {
      name: "Artist",
      value: comic["artist"],
    },
    {
      name: "Publisher",
      value: comic["publishingCompany"],
    },
    {
      name: "Alternative name",
      value: comic["alternativeTitle"],
    },
  ];
  return (
    <ul
      className={`${className} bg-white p-4 w-[250px] min-h-[400px] rounded-md flex flex-col gap-2`}
      {...props}
    >
      {info &&
        info.map(({ name, value }: { name: string; value: comicFormType }) => (
          <ComicInfoListValue name={name} value={value} key={name} />
        ))}
    </ul>
  );
};

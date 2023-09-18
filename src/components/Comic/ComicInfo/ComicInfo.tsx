import { ComicInfoProps } from "./ComicInfo.props";
import { ComicInfoListValue } from "./ComicInfoListValue";
type infoType = {
  name: string;
  value: string;
};
export const ComicInfo = ({
  className,
  comic,
  ...props
}: ComicInfoProps): JSX.Element => {
  const info: infoType[] | null = comic && [
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
      className={`${className} bg-white p-4 desktop:w-[250px] mobile:w-full min-h-[400px] desktop:rounded-md mobile:rounded-t-none flex flex-col gap-2`}
      {...props}
    >
      {info &&
        info.map(({ name, value }) => (
          <ComicInfoListValue name={name} value={value} key={name} />
        ))}
    </ul>
  );
};

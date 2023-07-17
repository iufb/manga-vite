export const ComicInfoListValue = ({
  name,
  value,
}: {
  name: string;
  value: string;
}): JSX.Element => {
  return (
    <li className="flex flex-col ">
      <span className="text-sm text-gray-400">{name}</span>
      <p className="text-md text-gray-900">{value}</p>
    </li>
  );
};

import { ComicsGridProps } from "./ComicsGrid.props";
export const ComicsGrid = ({
  children,
  className,
  ...props
}: ComicsGridProps): JSX.Element => {
  return (
    <div
      className={`${className} flex  gap-2 items-center  flex-wrap w-full min-h-[111px] bg-customWhite p-4 rounded-md `}
      {...props}
    >
      {children}
    </div>
  );
};

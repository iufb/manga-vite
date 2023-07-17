import { Outlet } from "react-router-dom";
import { ReaderLayoutProps } from "./ReaderLayout.props";
import { ReaderHeader } from "../../components";

export const ReaderLayout = ({
  className,
  ...props
}: ReaderLayoutProps): JSX.Element => {
  return (
    <div className={`${className} layout bg-gray-500`} {...props}>
      <ReaderHeader />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

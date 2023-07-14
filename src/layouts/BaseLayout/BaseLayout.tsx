import { Outlet } from "react-router-dom";
import { BaseLayoutProps } from "./BaseLayout.props";
import { Navbar } from "../../components";

export const BaseLayout = ({
  className,
  ...props
}: BaseLayoutProps): JSX.Element => {
  return (
    <div className={`${className} w-full h-screen  flex col`} {...props}>
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      footer
    </div>
  );
};

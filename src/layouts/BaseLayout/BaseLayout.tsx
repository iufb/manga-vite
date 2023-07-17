import { Outlet } from "react-router-dom";
import { BaseLayoutProps } from "./BaseLayout.props";
import { Navbar } from "../../components";
import { Footer } from "../../components";

export const BaseLayout = ({
  className,
  ...props
}: BaseLayoutProps): JSX.Element => {
  return (
    <div className={`${className}  layout bg-lightGrey`} {...props}>
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

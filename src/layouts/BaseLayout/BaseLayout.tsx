import { Outlet } from "react-router-dom";
import { BaseLayoutProps } from "./BaseLayout.props";
import { Navbar } from "../../components";
import { Footer } from "../../components";

export const BaseLayout = ({
  className,
  ...props
}: BaseLayoutProps): JSX.Element => {
  return (
    <>
      <div className={`${className}  layout h-screen `} {...props}>
        <Navbar />
        <main className={` bg-lightGrey    h-full `}>
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
};

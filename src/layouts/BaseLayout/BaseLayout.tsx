import { Outlet } from "react-router-dom";
import { BaseLayoutProps } from "./BaseLayout.props";
import { Navbar } from "../../components";
import { Footer } from "../../components";
import { useAppSelector } from "../../redux/hooks";
import { ModalContainer } from "../../components/modals/ModalContainer/ModalContainer";
import { SlidePanel } from "../../components/SlidePanel/SlidePanel";
import { Sidebar } from "../../components/Sidebar/Sidebar";

export const BaseLayout = ({
  className,
  ...props
}: BaseLayoutProps): JSX.Element => {
  const { globalModal, sidebarModalState } = useAppSelector(
    (state) => state.modal
  );
  console.log(globalModal);
  return (
    <>
      <div
        className={`${className}  layout bg-lightGrey  h-screen `}
        {...props}
      >
        <Navbar />
        <main className={`flex-1  `}>
          <Outlet />
        </main>
        <Footer />
      </div>
      {sidebarModalState == "open" && (
        <ModalContainer center={false}>
          <SlidePanel position="left" modal="sidebarModalState">
            <Sidebar />
          </SlidePanel>
        </ModalContainer>
      )}
    </>
  );
};

import { Outlet } from "react-router-dom";
import { BaseLayoutProps } from "./BaseLayout.props";
import { Navbar } from "../../components";
import { Footer } from "../../components";
import { useAppSelector } from "../../redux/hooks";
import { ModalContainer } from "../../components/modals/ModalContainer/ModalContainer";
import { SlidePanel } from "../../components/SlidePanel/SlidePanel";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { AnimatePresence } from "framer-motion";

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
      <div className={`${className}  layout h-screen `} {...props}>
        <Navbar />
        <main className={` bg-lightGrey   `}>
          <Outlet />
        </main>

        <Footer />
      </div>
      <AnimatePresence>
        {sidebarModalState == "open" && (
          <ModalContainer center={false}>
            <SlidePanel position="left" modal="sidebarModalState">
              <Sidebar />
            </SlidePanel>
          </ModalContainer>
        )}
      </AnimatePresence>
    </>
  );
};

import { ModalContainer } from "../../components/modals/ModalContainer/ModalContainer";
import { SlidePanel } from "../../components/SlidePanel/SlidePanel";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { useAppSelector } from "../../redux/hooks";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "../../components";
import { Outlet } from "react-router-dom";
import { FilterModal } from "../../components/modals/FilterModal/FilterModal";
import { AddToListModal } from "../../components/modals/AddToListModal/AddToListModal";

export const MobileLayout = () => {
  const { sidebarModalState, filterModalState, addToListModal } =
    useAppSelector((state) => state.modal);

  return (
    <>
      <div className="layout h-screen">
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
      <AnimatePresence>
        {sidebarModalState == "open" && (
          <ModalContainer center={false} key="modal">
            <SlidePanel position="left" modal="sidebarModalState">
              <Sidebar />
            </SlidePanel>
          </ModalContainer>
        )}
        {filterModalState == "open" && (
          <ModalContainer center={false} key="modal">
            <SlidePanel position="right" modal="filterModalState">
              <FilterModal />
            </SlidePanel>
          </ModalContainer>
        )}
        {addToListModal == "open" && (
          <ModalContainer center={false} key="modal">
            <SlidePanel position="up" modal="addToListModal">
              <AddToListModal />
            </SlidePanel>
          </ModalContainer>
        )}
      </AnimatePresence>
    </>
  );
};

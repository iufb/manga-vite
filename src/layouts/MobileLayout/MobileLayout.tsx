import { ModalContainer } from "../../components/modals/ModalContainer/ModalContainer";
import { SlidePanel } from "../../components/SlidePanel/SlidePanel";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { useAppSelector } from "../../redux/hooks";
import { AnimatePresence } from "framer-motion";
import { Outlet } from "react-router-dom";
import { FilterModal } from "../../components/modals/FilterModal/FilterModal";
import { AddToListModal } from "../../components/modals/AddToListModal/AddToListModal";
import { SortModal } from "../../components/modals/SortModal/SortModal";

export const MobileLayout = () => {
  const {
    isModalOpen,
    sidebarModalState,
    filterModalState,
    addToListModal,
    sort,
  } = useAppSelector((state) => state.modal);

  return (
    <>
      <main className={`${isModalOpen && "overflow-hidden"}`}>
        <Outlet />
      </main>
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
            <SlidePanel position="up" modal="addToListModal" bottom>
              <AddToListModal />
            </SlidePanel>
          </ModalContainer>
        )}
        {sort == "open" && (
          <ModalContainer center={false} key="modal">
            <SlidePanel position="up" modal="sort">
              <SortModal />
            </SlidePanel>
          </ModalContainer>
        )}
      </AnimatePresence>
    </>
  );
};

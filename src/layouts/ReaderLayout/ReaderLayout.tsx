import { Outlet } from "react-router-dom";
import { ReaderLayoutProps } from "./ReaderLayout.props";
import { ReaderHeader } from "../../components";
import { ModalContainer } from "../../components/modals/ModalContainer/ModalContainer";
import { SlidePanel } from "../../components/SlidePanel/SlidePanel";
import { useAppSelector } from "../../redux/hooks";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { ChapterList } from "../../components/ChapterList/ChapterList";
import { AnimatePresence } from "framer-motion";
import { AccessModal } from "../../components/modals/AccessModal/AccessModal";

export const ReaderLayout = ({
  className,
  ...props
}: ReaderLayoutProps): JSX.Element => {
  const { isModalOpen, sidebarModalState, chapterListModalState, accessModal } =
    useAppSelector((state) => state.modal);
  return (
    <>
      <div
        className={`${className} layout bg-gray-500 relative min-h-screen ${
          isModalOpen ? "h-screen" : "h-full"
        } `}
        {...props}
      >
        <ReaderHeader />
        <main className={`  ${isModalOpen && "overflow-hidden"}  `}>
          <Outlet />
        </main>
      </div>
      <AnimatePresence>
        {sidebarModalState == "open" && (
          <ModalContainer center={false} key="sidebar">
            <SlidePanel position="left" modal="sidebarModalState">
              <Sidebar />
            </SlidePanel>
          </ModalContainer>
        )}
        {chapterListModalState == "open" && (
          <ModalContainer center={false} key="chapterlist">
            <SlidePanel position="right" modal="chapterListModalState">
              <ChapterList />
            </SlidePanel>
          </ModalContainer>
        )}
        {accessModal == "open" && (
          <ModalContainer key="accessModal">
            <SlidePanel position="up" modal="accessModal">
              <AccessModal />
            </SlidePanel>
          </ModalContainer>
        )}
      </AnimatePresence>
    </>
  );
};

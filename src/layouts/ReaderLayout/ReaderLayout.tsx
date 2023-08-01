import { Outlet } from "react-router-dom";
import { ReaderLayoutProps } from "./ReaderLayout.props";
import { ReaderHeader } from "../../components";
import { ModalContainer } from "../../components/modals/ModalContainer/ModalContainer";
import { SlidePanel } from "../../components/SlidePanel/SlidePanel";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { ChapterList } from "../../components/ChapterList/ChapterList";
import { ReaderNavigation } from "../../components/ReaderHeader/ReaderNavigation/ReaderNavigation";
import { useEffect } from "react";
import { updateAllModals } from "../../redux/features/modal/modalSlice";
import { AnimatePresence } from "framer-motion";

export const ReaderLayout = ({
  className,
  ...props
}: ReaderLayoutProps): JSX.Element => {
  const { sidebarModalState, chapterListModalState } = useAppSelector(
    (state) => state.modal
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(updateAllModals("close"));
  }, []);
  return (
    <>
      <div
        className={`${className} layout bg-gray-500 relative min-h-screen h-full `}
        {...props}
      >
        <ReaderHeader />
        <main className={`flex-1`}>
          <Outlet />
          <ReaderNavigation className="sticky z-50 left-5 bottom-5" />
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
      </AnimatePresence>
    </>
  );
};

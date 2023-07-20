import { Outlet } from "react-router-dom";
import { ReaderLayoutProps } from "./ReaderLayout.props";
import { ReaderHeader } from "../../components";
import { ModalContainer } from "../../components/modals/ModalContainer/ModalContainer";
import { SlidePanel } from "../../components/SlidePanel/SlidePanel";
import { useAppSelector } from "../../redux/hooks";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { ChapterList } from "../../components/ChapterList/ChapterList";
import { ReaderNavigation } from "../../components/ReaderHeader/ReaderNavigation/ReaderNavigation";

export const ReaderLayout = ({
  className,
  ...props
}: ReaderLayoutProps): JSX.Element => {
  const { sidebarModalState, chapterListModalState } = useAppSelector(
    (state) => state.modal
  );
  return (
    <>
      <div className={`${className} layout bg-gray-500 `} {...props}>
        <ReaderHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <ReaderNavigation />
      </div>
      {sidebarModalState == "open" && (
        <ModalContainer center={false}>
          <SlidePanel position="left" modal="sidebarModalState">
            <Sidebar />
          </SlidePanel>
        </ModalContainer>
      )}
      {chapterListModalState == "open" && (
        <ModalContainer center={false}>
          <SlidePanel position="right" modal="chapterListModalState">
            <ChapterList />
          </SlidePanel>
        </ModalContainer>
      )}
    </>
  );
};

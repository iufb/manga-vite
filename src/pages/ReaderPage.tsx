import { ChapterViewer, PageContainer } from "../components";
import { Comment } from "../components/Comment/Comment";

export const ReaderPage = () => {
  return (
    <PageContainer full bgColor="bg-gray-500 ">
      <ChapterViewer />
      <Comment
        type="page"
        className="tablet:max-w-[700px] desktop:max-w-[1200px]"
      />
    </PageContainer>
  );
};

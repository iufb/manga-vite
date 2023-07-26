import { AddComicForm, PageContainer } from "../components";

export const AddComicPage = () => {
  return (
    <PageContainer
      full
      className="py-10 max-w-[1320px] tablet:mx-auto my-10 rounded-md"
      bgColor="bg-customWhite"
    >
      <h1 className="title">Add new comic:</h1>
      <AddComicForm />
    </PageContainer>
  );
};

import { AddComicForm, PageContainer } from "../components";

export const AddComicPage = () => {
  return (
    <PageContainer full>
      <h1 className="title mt-10">Add new comic:</h1>
      <AddComicForm />
    </PageContainer>
  );
};

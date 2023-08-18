import { PageContainer, Updates } from "../components";
import { GenresList } from "../components/GenresList/GenresList";
export const HomePage = (): JSX.Element => {
  return (
    <PageContainer
      full
      className="max-w-[1200px] mx-auto flex flex-row items-start gap-4 desktop:py-10 mobile:py-4 px-1"
    >
      <Updates />
      <GenresList />
    </PageContainer>
  );
};

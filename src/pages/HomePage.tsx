import { PageContainer, Updates } from "../components";
import { GenresList } from "../components/GenresList/GenresList";
import { PopularUpdates } from "../components/Updates/PopularUpdates/PopularUpdates";
export const HomePage = (): JSX.Element => {
  return (
    <PageContainer
      full
      className="max-w-[1200px]  px-3 flex flex-col items-start gap-4 desktop:py-10 mobile:py-4 "
    >
      <PopularUpdates />
      <div className="flex gap-3 w-full">
        <Updates className="flex-1" />
        <GenresList />
      </div>
    </PageContainer>
  );
};

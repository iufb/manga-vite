import { PageContainer } from "../components";
import { UserHeader } from "../components/UserHeader/UserHeader";

export const UserPage = () => {
  return (
    <PageContainer full>
      <main className="h-full w-full max-w-[1200px]">
        <UserHeader />
      </main>
    </PageContainer>
  );
};

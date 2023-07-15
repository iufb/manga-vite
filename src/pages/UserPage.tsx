import { PageContainer } from "../components";
import { UserHeader } from "../components/UserHeader/UserHeader";

export const UserPage = () => {
  return (
    <PageContainer full>
      <main className="h-full w-full max-w-screen-laptop">
        <UserHeader />
      </main>
    </PageContainer>
  );
};

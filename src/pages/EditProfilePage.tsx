import { EditProfileForm, PageContainer } from "../components";

export const EditProfilePage = () => {
  return (
    <PageContainer
      full
      className="py-10 max-w-[1320px] tablet:mx-auto my-10 rounded-md"
      bgColor="bg-customWhite"
    >
      <h1 className="title">Edit Profile: </h1>
      <EditProfileForm />
    </PageContainer>
  );
};

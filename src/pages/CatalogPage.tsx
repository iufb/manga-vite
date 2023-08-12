import { PageContainer } from "../components";
import { Catalog } from "../components/Catalog/Catalog";
export const CatalogPage = () => {
  return (
    <PageContainer full bgColor="desktop:max-w-[1200px] mx-auto h-full ">
      <Catalog />
    </PageContainer>
  );
};

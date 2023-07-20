import { useSearchParams } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";
import { Select } from "../../Select/Select";
import { ReaderNavigationProps } from "./ReaderNavigation.props";

export const ReaderNavigation = ({
  className,
}: ReaderNavigationProps): JSX.Element => {
  const { pagesQuantity } = useAppSelector((state) => state.chapter);
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page"));
  const pageNavigationValues = new Array(pagesQuantity).map(
    (_, idx) => `Page ${idx + 1}/ ${pagesQuantity}`
  );
  return (
    <Select
      items={pageNavigationValues}
      defaultVal={`Page ${currentPage} / ${pagesQuantity}`}
      className={`${className}`}
    />
  );
};

import { useNavigate, useSearchParams } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";
import { Select } from "../../Select/Select";
import { ReaderNavigationProps } from "./ReaderNavigation.props";
import { ChangeEvent, useEffect, useState } from "react";
import { scrollToTop } from "../../../utils/helpers";

export const ReaderNavigation = ({
  className,
}: ReaderNavigationProps): JSX.Element => {
  const { pagesQuantity } = useAppSelector((state) => state.chapter);
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const navigate = useNavigate();
  const pageNavigationValues = new Array(pagesQuantity)
    .fill(pagesQuantity)
    .map((_, idx) => `${idx + 1}/ ${pagesQuantity}`);
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const pageNumber = e.target.value.match(/\d+/);
    setCurrentPage(Number(pageNumber));
    if (pageNumber) {
      navigate(`?page=${pageNumber}`);
      scrollToTop();
    }
  };
  useEffect(() => {
    setCurrentPage(Number(searchParams.get("page")));
  }, [searchParams]);
  return (
    <Select
      items={pageNavigationValues}
      onChange={handleChange}
      currentValue={`${currentPage}/ ${pagesQuantity}`}
      className={`${className} desktop:select-md tablet:select-sm mobile:select-xs `}
    />
  );
};

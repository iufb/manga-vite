import { FilterForm } from "../../forms/filterForm/FilterForm";
import { FilterModalProps } from "./FilterModal.props";
import { BaseModal } from "../BaseModal/BaseModal";

export const FilterModal = ({
  className,
  ...props
}: FilterModalProps): JSX.Element => {
  return (
    <BaseModal
      title="Filter"
      modalType="filterModalState"
      className={`${className} w-full h-screen bg-customWhite px-2 py-4 overflow-hidden `}
      {...props}
    >
      <FilterForm />
    </BaseModal>
  );
};

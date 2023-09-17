import { SortMenu } from "../../Sort/SortMenu/SortMenu";
import { BaseModal } from "../BaseModal/BaseModal";
import { SortModalProps } from "./SortModal.props";

export const SortModal = ({
  className,
  ...props
}: SortModalProps): JSX.Element => {
  return (
    <BaseModal
      title="Sort"
      modalType="sort"
      className={`${className}  bg-customWhite h-[300px] rounded-t-xl p-3 absolute bottom-0 w-full col`}
      {...props}
    >
      <SortMenu className="" />
    </BaseModal>
  );
};

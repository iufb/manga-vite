import { listArray } from "../../../utils/constants";
import { BaseModal } from "../BaseModal/BaseModal";
import { AddToListModalProps } from "./AddToListModal.props";

export const AddToListModal = ({
  className,
  ...props
}: AddToListModalProps): JSX.Element => {
  return (
    <BaseModal
      modalType="addToListModal"
      title="Add to list"
      className={`${className} bg-customWhite h-[200px] rounded-t-xl p-3 absolute bottom-0 w-full`}
      {...props}
    >
      <ul className="col gap-2 capitalize">
        {listArray.map((l) => (
          <li>{l}</li>
        ))}
      </ul>
    </BaseModal>
  );
};

import { listArray } from "../../../utils/constants";
import { BaseModal } from "../BaseModal/BaseModal";
import { AddToListModalProps } from "./AddToListModal.props";
import { useAuth } from "../../../hooks";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks";
import { addComicToList } from "../../../api/list/list";
import { listType } from "../../../types/list.type";
import { updateModalStatus } from "../../../redux/features/modal/modalSlice";
import { mutate } from "swr";

export const AddToListModal = ({
  className,
  ...props
}: AddToListModalProps): JSX.Element => {
  const { user } = useAuth();
  const dispatch = useAppDispatch();
  const { comicId } = useParams();
  const onSelect = (value: listType) => {
    try {
      if (user && comicId) {
        addComicToList({
          user: user._id,
          comic: comicId,
          listType: value,
        }).then(() => {
          dispatch(
            updateModalStatus({ modal: "addToListModal", status: "close" })
          );
          mutate(`list/${comicId}/${user._id}`);
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <BaseModal
      modalType="addToListModal"
      title="Add to list"
      className={`${className}  bg-customWhite h-[200px] rounded-t-xl p-3  w-full items-start`}
      {...props}
    >
      <ul className="col gap-2 capitalize px-2 text-gray-800">
        {listArray.map((l) => (
          <li key={l} onClick={() => onSelect(l)} className="">
            {l}
          </li>
        ))}
      </ul>
    </BaseModal>
  );
};

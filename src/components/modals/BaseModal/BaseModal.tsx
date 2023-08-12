import { AiOutlineClose } from "react-icons/ai";
import { BaseModalProps } from "./BaseModal.props";
import { useAppDispatch } from "../../../redux/hooks";
import { updateModalStatus } from "../../../redux/features/modal/modalSlice";

export const BaseModal = ({
  className,
  title,
  children,
  modalType,
  ...props
}: BaseModalProps): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <div className={`${className} `} {...props}>
      <h2 className="text-lg mb-2 text-gray-800">{title} :</h2>
      <AiOutlineClose
        className="absolute right-1 top-1 text-xl z-40"
        onClick={() =>
          dispatch(updateModalStatus({ modal: modalType, status: "close" }))
        }
      />
      {children}
    </div>
  );
};

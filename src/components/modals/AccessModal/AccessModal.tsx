import { Link } from "react-router-dom";
import { BaseModal } from "../BaseModal/BaseModal";
import { AccessModalProps } from "./AccessModal.props";

export const AccessModal = ({
  className,
  ...props
}: AccessModalProps): JSX.Element => {
  return (
    <BaseModal
      title="Authentication sensitive content"
      modalType={`accessModal`}
      className={`${className} max-w-fit  bg-customWhite text-indigoGrey  w-full p-4 rounded-md`}
      {...props}
    >
      <p>
        Please{" "}
        <Link to="/login" className="text-lg font-bold underline">
          Login
        </Link>{" "}
        or{" "}
        <Link to="/resister" className="text-lg font-bold underline">
          Register
        </Link>{" "}
        to continue...
      </p>
    </BaseModal>
  );
};

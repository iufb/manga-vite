import { AlertProps } from "./Alert.props";

import {
  AiOutlineWarning,
  AiOutlineInfoCircle,
  AiFillCheckCircle,
} from "react-icons/ai";
import { BiErrorAlt } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";
import { setAlert } from "../../redux/features/alert/alertSlice";

export const Alert = ({ className, ...props }: AlertProps): JSX.Element => {
  const { alertStatus, text } = useAppSelector((state) => state.alert);
  const dispatch = useAppDispatch();
  const getIcon = () => {
    switch (alertStatus) {
      case null:
        return;
      case "warning":
        return <AiOutlineWarning />;
      case "error":
        return <BiErrorAlt />;
      case "success":
        return <AiFillCheckCircle />;
      case "info":
        return <AiOutlineInfoCircle />;
    }
  };
  useEffect(() => {
    if (alertStatus) {
      setTimeout(() => {
        dispatch(setAlert({ text: undefined, alertStatus: null }));
      }, 5000);
    }
  }, [alertStatus]);
  if (text && alertStatus) {
    return (
      <div
        className={`alert  alert-${alertStatus} ${className}  absolute z-[100]  max-w-[500px] right-2 top-10 w-full justify-normal `}
        {...props}
      >
        {getIcon()}
        <span>{text}</span>
      </div>
    );
  } else {
    return <></>;
  }
};

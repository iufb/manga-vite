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
  const getAlertStyle = () => {
    switch (alertStatus) {
      case null:
        return;
      case "warning":
        return { icon: <AiOutlineWarning />, style: "alert-warning" };
      case "error":
        return { icon: <BiErrorAlt />, style: "alert-warning" };
      case "success":
        return { icon: <AiFillCheckCircle />, style: "alert-success" };
      case "info":
        return { icon: <AiOutlineInfoCircle />, style: "alert-info" };
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
        className={`alert ${
          getAlertStyle()?.style
        } ${className} max-h-fit flex mobile:justify-center desktop:justify-normal  absolute z-[100]  desktop:max-w-[450px] mobile:max-w-[300px] desktop:right-2 desktop:top-10 mobile:top-5 mobile:right-[50%] desktop:translate-x-0 mobile:translate-x-[50%] w-full `}
        {...props}
      >
        {getAlertStyle()?.icon}
        <span>{text}</span>
      </div>
    );
  } else {
    return <></>;
  }
};

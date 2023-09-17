import { opacityAnimation } from "../../../utils/motion";
import { ModalContainerProps } from "./ModalContainer.props";
import { motion } from "framer-motion";
export const ModalContainer = ({
  children,
  center = true,
  scroll,
  className,
}: ModalContainerProps): JSX.Element => {
  return (
    <motion.div
      key="modalContainer"
      className={` fixed h-screen  z-50 left-0 top-0   w-full  min-h-screen  ${className}  ${
        scroll && "overflow-y-scroll"
      }  bg-opacity-60  ${
        center && "grid justify-center items-center"
      } bg-gray-900  `}
      {...opacityAnimation}
    >
      {children}
    </motion.div>
  );
};

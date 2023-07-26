import { opacityAnimation } from "../../../utils/motion";
import { ModalContainerProps } from "./ModalContainer.props";
import { AnimatePresence, motion } from "framer-motion";
export const ModalContainer = ({
  children,
  center = true,
  scroll,
}: ModalContainerProps): JSX.Element => {
  return (
    <AnimatePresence>
      <motion.div
        className={`fixed z-50 left-0 top-0   w-full  min-h-screen  h-full  ${
          scroll && "overflow-y-scroll"
        }  bg-opacity-60  ${
          center && "grid justify-center items-center"
        } bg-gray-900 `}
        {...opacityAnimation}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

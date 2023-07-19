import { opacityAnimation } from "../../../utils/motion";
import { ModalContainerProps } from "./ModalContainer.props";
import { AnimatePresence, motion } from "framer-motion";
export const ModalContainer = ({
  children,
  center = true,
}: ModalContainerProps): JSX.Element => {
  return (
    <AnimatePresence>
      <motion.div
        className={`absolute z-50 top-0 left-0  w-full min-h-screen bg-opacity-60 overflow-hidden ${
          center && "center"
        } bg-gray-900 `}
        {...opacityAnimation}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

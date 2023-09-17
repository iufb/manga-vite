import { SlidePanelProps } from "./SlidePanel.props";
import { motion } from "framer-motion";
import { slideAnimation } from "../../utils/motion";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { useAppDispatch } from "../../redux/hooks";
import { useRef } from "react";
import { updateModalStatus } from "../../redux/features/modal/modalSlice";
export const SlidePanel = ({
  children,
  position,
  modal,
  bottom,
  className,
  ...props
}: SlidePanelProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => {
    if (modal) dispatch(updateModalStatus({ modal, status: "close" }));
  });
  return (
    <motion.div
      className={`${className}  flex  ${
        bottom ? "items-end" : "items-center"
      } h-full w-full ${
        modal == "accessModal"
          ? "desktop:max-w-full justify-center"
          : "desktop:max-w-[380px] justify-end"
      } mobile:max-w-full absolute overflow-hidden ${
        position == "left" ? "left-0" : "right-0"
      } z-70`}
      {...slideAnimation(position)}
      ref={ref}
      {...props}
    >
      {children}
    </motion.div>
  );
};

import { SlidePanelProps } from "./SlidePanel.props";
import { AnimatePresence, motion } from "framer-motion";
import { slideAnimation } from "../../utils/motion";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { useAppDispatch } from "../../redux/hooks";
import { useRef } from "react";
import { updateModalStatus } from "../../redux/features/modal/modalSlice";
export const SlidePanel = ({
  children,
  position,
  modal,
  className,
  ...props
}: SlidePanelProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () =>
    dispatch(updateModalStatus({ modal, status: "close" }))
  );
  return (
    <AnimatePresence>
      <motion.div
        className={`${className} h-full w-full desktop:max-w-[380px] mobile:max-w-full absolute overflow-hidden ${
          position == "left" ? "left-0" : "right-0"
        } z-70`}
        {...slideAnimation(position)}
        ref={ref}
        {...props}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

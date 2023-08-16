import { slideAnimation } from "../../utils/motion";
import { ComicsGridProps } from "./ComicsGrid.props";
import { motion } from "framer-motion";
export const ComicsGrid = ({
  children,
  className,
  ...props
}: ComicsGridProps): JSX.Element => {
  return (
    <motion.div
      className={`${className} flex gap-2 items-center  flex-wrap w-full min-h-[111px]`}
      {...props}
      {...slideAnimation("up")}
    >
      {children}
    </motion.div>
  );
};

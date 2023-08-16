import { HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";
export interface ComicsGridProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
}

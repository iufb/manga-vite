import { ReactNode } from "react";
import { LinkProps } from "react-router-dom";
export interface IconLinkProps extends LinkProps {
  icon: JSX.Element;
  children: ReactNode;
}

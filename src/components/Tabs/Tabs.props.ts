import { DetailedHTMLProps, HTMLAttributes } from "react";
export interface TabsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  tabs: string[];
  tabStyle: "boxed" | "lifted";
  changeTab: (tab: string) => void;
  activeTab: string;
}

import { DetailedHTMLProps, HTMLAttributes } from "react";
export interface TabsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  tabs: string[];
  changeTab: (tab: string) => void;
  activeTab: string;
}

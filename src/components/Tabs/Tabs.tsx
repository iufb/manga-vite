import { TabsProps } from "./Tabs.props";

export const Tabs = ({
  tabs,
  changeTab,
  tabStyle,
  activeTab,
  className,
  ...props
}: TabsProps): JSX.Element => {
  return (
    <div
      className={`${className} tabs ${
        tabStyle == "boxed" ? " tabs-boxed" : ""
      } py-1`}
      {...props}
    >
      {tabs.map((tab) => (
        <a
          key={tab}
          className={`tab tab-lifted capitalize text-xl ${
            activeTab == tab
              ? "activeTab bg-indigoGrey text-customWhite font-bold"
              : ""
          } `}
          onClick={() => changeTab(tab)}
        >
          {tab}
        </a>
      ))}
    </div>
  );
};

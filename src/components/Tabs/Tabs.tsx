import { TabsProps } from "./Tabs.props";

export const Tabs = ({
  tabs,
  changeTab,
  activeTab,
  className,
  ...props
}: TabsProps): JSX.Element => {
  return (
    <div className={`${className} tabs`} {...props}>
      {tabs.map((tab) => (
        <a
          key={tab}
          className={`tab tab-lifted text-xl ${
            activeTab == tab ? "tab-active text-indigoGrey font-bold" : ""
          } `}
          onClick={() => changeTab(tab)}
        >
          {tab}
        </a>
      ))}
    </div>
  );
};

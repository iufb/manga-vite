import { PageContainerProps } from "./PageContainer.props";

export const PageContainer = ({
  children,
  full,
  bgColor = "bg-lightGrey",
  centered = true,
  className,
  ...props
}: PageContainerProps) => (
  <div
    className={`${className}  mx-auto  w-full ${full ? "h-fit" : "h-screen"} ${
      centered && "col center"
    } ${bgColor}  `}
    {...props}
  >
    {children}
  </div>
);

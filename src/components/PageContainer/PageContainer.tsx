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
    className={`${className}  w-full ${full ? "h-full" : "h-screen"} ${
      centered && "col center"
    } ${bgColor} `}
    {...props}
  >
    {children}
  </div>
);

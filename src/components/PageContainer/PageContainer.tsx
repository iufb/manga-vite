import { PageContainerProps } from "./PageContainer.props";

export const PageContainer = ({
  children,
  full,
  centered = true,
  className,
  ...props
}: PageContainerProps) => (
  <div
    className={`${className} pb-20 w-full ${full ? "h-full" : "h-screen"} ${
      centered && "col center"
    }  bg-lightGrey`}
    {...props}
  >
    {children}
  </div>
);

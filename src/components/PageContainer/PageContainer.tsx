import { PageContainerProps } from "./PageContainer.props";

export const PageContainer = ({
  children,
  full,
  className,
  ...props
}: PageContainerProps) => (
  <div
    className={`${className} w-full ${
      full ? "h-full" : "h-screen"
    } col  center `}
    {...props}
  >
    {children}
  </div>
);

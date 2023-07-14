import { PageContainerProps } from "./PageContainer.props";

export const PageContainer = ({
  children,
  className,
  ...props
}: PageContainerProps) => (
  <div className={`${className} w-full h-screen center `} {...props}>
    {children}
  </div>
);

import { ModalContainerProps } from "./ModalContainer.props";

export const ModalContainer = ({
  children,
}: ModalContainerProps): JSX.Element => {
  return (
    <div className="absolute top-0 left-0  w-full min-h-screen bg-opacity-50 center bg-indigoGrey overflow-hidden">
      {children}
    </div>
  );
};

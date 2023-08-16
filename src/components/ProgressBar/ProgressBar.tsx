import { ProgressBarProps } from "./ProgressBar.props";

export const ProgressBar = ({
  percentage,
  className,
  ...props
}: ProgressBarProps): JSX.Element => {
  return (
    <progress
      className={`progress ${className}  w-full progress-success`}
      value={percentage}
      max="100"
      {...props}
    ></progress>
  );
};

import { useEffect, useRef } from "react";
import { ProgressBarProps } from "./ProgressBar.props";
import { useThrottle } from "../../hooks/useThrottle";

export const ProgressBar = ({
  percentage,
  className,
  ...props
}: ProgressBarProps): JSX.Element => {
  const elRef = useRef<HTMLDivElement>(null);
  const updatedWidth = useThrottle(percentage, 400);
  useEffect(() => {
    if (updatedWidth) {
      updateWidth(updatedWidth);
    }
  }, [updatedWidth]);
  function updateWidth(value: number) {
    if (elRef.current) elRef.current.style.width = `${value}%`;
  }
  return (
    <div className={`${className} h-2 rounded-lg bg-customWhite relative`}>
      <div
        className={`h-2 rounded-lg bg-gray-700 transition transition:width absolute left-0`}
        {...props}
        ref={elRef}
        style={{
          width: 0,
        }}
      />
    </div>
  );
};

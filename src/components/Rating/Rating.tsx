import { useParams } from "react-router-dom";
import { useAuth } from "../../hooks";
import { RateButton } from "./RateButton/RateButton";
import { RatingProps } from "./Rating.props";

import useSWR from "swr";
import { rateType } from "../../types/rate.type";
import fetcher from "../../api/axios-client";
export const Rating = ({ className, ...props }: RatingProps): JSX.Element => {
  const { user } = useAuth();
  const { comicId } = useParams();

  return (
    <>
      <div className={` ${className}`} {...props}>
        <div></div>
        <RateButton />
      </div>
    </>
  );
};

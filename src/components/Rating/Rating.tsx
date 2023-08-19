import { useParams } from "react-router-dom";
import { RateButton } from "./RateButton/RateButton";
import { RatingProps } from "./Rating.props";

import useSWR from "swr";
import fetcher from "../../api/axios-client";
import { comicRateType } from "../../types/rate.type";
import { AiFillStar } from "react-icons/ai";
export const Rating = ({ className, ...props }: RatingProps): JSX.Element => {
  const { comicId } = useParams();
  const { data: comicRate } = useSWR<comicRateType>(
    comicId && `/rating/comic/${comicId}`,
    fetcher
  );
  console.log(comicRate);
  return (
    <>
      <div
        className={` ${className} mobile:flex mobile:gap-1 desktop:col`}
        {...props}
      >
        {comicRate && (
          <div className="gap-1 center">
            <AiFillStar className="text-yellow-400 desktop:text-[20px] mobile:text-[16px]" />
            <span className="desktop:text-2xl mobile:text-lg font-bold">
              {comicRate.averageRate ? comicRate.averageRate.toFixed(2) : 0}
            </span>
            <span className="text-sm justify-self-end desktop:mt-1">
              [{comicRate.rateNumber ? comicRate.rateNumber : 0}]
            </span>
          </div>
        )}
        <RateButton />
      </div>
    </>
  );
};

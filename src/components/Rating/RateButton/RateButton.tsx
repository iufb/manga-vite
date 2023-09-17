import { useParams } from "react-router-dom";
import fetcher from "../../../api/axios-client";
import useSWR from "swr";

import { useAuth } from "../../../hooks";

import { RateButtonProps } from "./RateButton.props";
import { rateType } from "../../../types/rate.type";
import { AiOutlineStar } from "react-icons/ai";
import { useAppDispatch } from "../../../redux/hooks";
import { updateModalStatus } from "../../../redux/features/modal/modalSlice";

export const RateButton = ({
  className,
  ...props
}: RateButtonProps): JSX.Element => {
  const { user } = useAuth();
  const { comicId } = useParams();
  const dispatch = useAppDispatch();
  const { data: rating } = useSWR<rateType>(
    user && `rating/${user?._id}/${comicId}`,
    fetcher
  );
  const startRate = () => {
    if (!user) {
      dispatch(updateModalStatus({ modal: "accessModal", status: "open" }));
      return;
    }
    dispatch(updateModalStatus({ modal: "addRate", status: "open" }));
  };
  return (
    <div className={`${className}`} {...props}>
      <button onClick={startRate} className="btn btn-sm ">
        {rating?.rate ? (
          <span>{rating?.rate} - my rate</span>
        ) : (
          <span className="flex gap-1">
            <AiOutlineStar />
            Add rate
          </span>
        )}
      </button>
    </div>
  );
};

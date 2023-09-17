import { useState } from "react";
import { BaseModal } from "../BaseModal/BaseModal";
import { RateModalProps } from "./RateModal.props";
import { useAuth } from "../../../hooks";
import { useParams } from "react-router-dom";
import { addRatingToComic } from "../../../api/rate/rate";
import { mutate } from "swr";
import { useAppDispatch } from "../../../redux/hooks";
import { setAlert } from "../../../redux/features/alert/alertSlice";
import { updateModalStatus } from "../../../redux/features/modal/modalSlice";

export const RateModal = ({
  className,
  ...props
}: RateModalProps): JSX.Element => {
  const { user } = useAuth();
  const { comicId } = useParams();
  const dispatch = useAppDispatch();
  const [selectedRating, setSelectedRating] = useState<number>(1);
  const handleSelect = (rate: number) => {
    setSelectedRating(rate);
  };
  const addRate = () => {
    if (user && comicId) {
      addRatingToComic(comicId, user._id, selectedRating).then(() => {
        mutate(`rating/${user?._id}/${comicId}`);
        mutate(`/rating/comic/${comicId}`);
        dispatch(
          setAlert({ alertStatus: "success", text: "Your rate added." })
        );
        dispatch(updateModalStatus({ modal: "addRate", status: "close" }));
      });
    }
  };
  return (
    <BaseModal
      title="Rate this comic"
      modalType="addRate"
      className={`${className} bg-customWhite p-4 rounded-md  `}
      {...props}
    >
      <div className="col gap-3">
        <div className="rating rating-lg">
          {[1, 2, 3, 4, 5].map((rate) => (
            <input
              key={rate}
              type="radio"
              name="rating-8"
              checked={selectedRating === rate}
              className="mask mask-star-2 bg-orange-400"
              onChange={() => handleSelect(rate)}
            />
          ))}
        </div>
        <button
          className="btn btn-sm bg-indigoGrey text-customWhite hover:bg-indigoLight"
          onClick={addRate}
        >
          Rate
        </button>
      </div>
    </BaseModal>
  );
};

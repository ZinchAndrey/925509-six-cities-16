import { ChangeEvent, useState, Fragment } from 'react';

import { Rating } from '../../const';

function ReviewsForm(): JSX.Element {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  const handleChangeComment = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.target.value);
  };

  const handleChangeRating = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(evt.target.value));
  };


  const isFormValid = comment.length && rating;

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {Object.keys(Rating).map((ratingKey) => (
          <Fragment key={ratingKey}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={Rating[ratingKey]}
              id={`${Rating[ratingKey]}-stars`}
              type="radio"
              onChange={handleChangeRating}
              checked={Rating[ratingKey] === rating}
            />
            <label
              htmlFor={`${Rating[ratingKey]}-stars`}
              className="reviews__rating-label form__rating-label"
              title={ratingKey}
            >
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </Fragment>
        ))}

      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleChangeComment}
        value={comment}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isFormValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;

import * as yup from "yup";
import React from "react";
import style from "./SearchCard.module.scss";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { newBid } from "../../store/actions";
import { useDispatch } from "react-redux";

const SearchCard = ({
  id,
  currency,
  color,
  brand,
  name,
  description,
  image,
  year,
  price,
}) => {
  const dispatch = useDispatch();

  const initialValues = {
    bid: "",
  };

  let validationSchema = yup.object().shape({
    bid: yup
      .number()
      .typeError("must be a number")
      .positive("age must be greater than zero")
      .min(price + 1, "Please Enter higher bid")
      .required("Bid is required"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(
      newBid({
        id: id,
        name: name,
        bid: values.bid,
        details: {
          currency: currency,
          price: 20000000,
          color: color,
          brand: brand,
          manufactureYear: year,
          image: image,
          description: description,
        },
      })
    );
    // console.log(actions);
  };

  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.image}>
          <img
            src={
              image
                ? image
                : "https://www.seat.com.mt/content/dam/public/seat-website/carworlds/compare/default-image/ghost.png"
            }
            alt={`${brand} ${name}`}
          />
        </div>
        <div className={style.brandAndName}>
          {brand} {name} {year}
        </div>
        <div className={style.description}>{description}</div>
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
            handleSubmit(values, actions);
          }}
        >
          {({ handleBlur, handleChange, errors }) => (
            <Form>
              <div className={style.biddingInput}>
                <Field
                  type="number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="bid"
                  placeholder="Enter Your Bid"
                />
                <span>LKR</span>
              </div>
              <div className={style.errorMsg}>
                <ErrorMessage name="bid" />
              </div>
              <div className={style.submitButton}>
                <button
                  disabled={errors.bid}
                  type="submit"
                  className={style.btn}
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SearchCard;

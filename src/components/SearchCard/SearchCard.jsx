import * as yup from "yup";
import React from "react";
import style from "./SearchCard.module.scss";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { newBid } from "../../store/actions";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { NavLink } from "react-router-dom";

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
    toast.success("Your bid has submitted successfully");
    actions.resetForm();
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
        <div className={style.price}>{price} LKR</div>
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={(values, actions) => {
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
        <NavLink
          to={{
            pathname: "/view",
            props: {
              id: id,
              name: name,
              details: {
                currency: currency,
                price: 20000000,
                color: color,
                brand: brand,
                manufactureYear: year,
                image: image,
                description: description,
              },
            },
          }}
        >
          <button className={style.viewBtn}>Open</button>
        </NavLink>
      </div>
    </div>
  );
};

export default SearchCard;

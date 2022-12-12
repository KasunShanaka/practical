import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearBids } from "../../store/actions";
import style from "./Biddings.module.scss";

const Biddings = () => {
  const badeVehicles = useSelector((state) => state.badeVehicles);
  const [total, setTotal] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    calculatedTotal();
  }, [badeVehicles]);

  const calculatedTotal = () => {
    let sum = badeVehicles.reduce(function (prev, current) {
      return prev + +current.bid;
    }, 0);
    setTotal(sum)
  };

  const handleClear = () => {
    dispatch(clearBids);
    window.location.reload();
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.header}>Biddings</div>
        <div className={style.content}>
          {badeVehicles.map((item, index) => (
            <div key={index} className={style.card}>
              <span className={style.image}>
                <img
                  src={
                    item.details.image
                      ? item.details.image
                      : "https://www.seat.com.mt/content/dam/public/seat-website/carworlds/compare/default-image/ghost.png"
                  }
                  alt={`${item.details.brand} ${item.name}`}
                />
              </span>
              <span className={style.info}>
                <div className={style.title}>
                  {item.details.brand} {item.name}{" "}
                  {item.details.manufactureYear}
                </div>
                <div className={style.bidValue}>{item.bid} LKR</div>
              </span>
            </div>
          ))}
        </div>
        <div className={style.footer}>
          <span className={style.total}>Total: {total} LKR</span>
          <span className={style.clearBtn}>
            <div onClick={() => handleClear()} name="Clear">
              Clear
            </div>
          </span>
        </div>
      </div>
    </>
  );
};

export default Biddings;

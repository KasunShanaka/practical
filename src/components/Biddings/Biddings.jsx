import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import style from "./Biddings.module.scss";

const Biddings = () => {
  const badeVehicles = useSelector((state) => state.badeVehicles);

  useEffect(() => {
    console.log(badeVehicles);
  }, [badeVehicles]);

  return (
    <>
      <div className={style.container}>
        <div className={style.header}>Biddings</div>
        {badeVehicles.map((item, index) => (
          <div key={index} className={style.content}>
            <div className={style.card}>
              <span className={style.image}>
                <img
                  src="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/40432/scorpio-n-exterior-right-front-three-quarter-15.jpeg?isig=0&q=75"
                  alt=""
                />
              </span>
              <span className={style.info}>
                <div className={style.title}>Toyota</div>
                <div className={style.bidValue}>19239000.00 LKR</div>
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className={style.footer}>Total: 236438 LKR</div>
    </>
  );
};

export default Biddings;

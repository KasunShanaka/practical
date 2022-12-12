import React, { useEffect, useState } from "react";
import style from "./HomePage.module.scss";
import ReactSelect from "react-select";
import { Brands } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { getVehicles } from "../../store/actions";
import SearchCard from "../../components/SearchCard/SearchCard";
import bagIcon from "../../images/shopping-bag-solid.svg";
import Biddings from "../../components/Biddings/Biddings";

const HomePage = () => {
  const dispatch = useDispatch();
  const [openBiddings, setOpenBiddings] = useState(false);
  const vehicles = useSelector((state) => state.vehicles);

  useEffect(() => {
    dispatch(getVehicles());
  }, [dispatch]);

  const handleFilters = (brand) =>{
    dispatch(getVehicles(brand));
  }

  return (
    <div className={style.container}>
      <div className={style.navbar}>
        <div className={style.brandSelector}>
          <div className={style.label}>Brand</div>
          <div className={style.selectInput}>
            <ReactSelect
             onChange={(e)=> handleFilters(e.value)}
             options={Brands} />
          </div>
        </div>
        <div
          onClick={() => setOpenBiddings(!openBiddings)}
          className={style.bagIcon}
        >
          <img src={bagIcon} alt="" />
        </div>
        {openBiddings && <Biddings />}
      </div>
      <div className={style.body}>
        {vehicles.map((item, index) => (
          <SearchCard
            key={index}
            id={item.id}
            currency = {item.details.currency}
            color = {item.details.color}
            price={item.details.price}
            year={item.details.manufactureYear}
            brand={item.details.brand}
            description={item.details.description}
            name={item.name}
            image={item.details.image}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

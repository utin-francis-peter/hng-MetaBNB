import React from "react";
import { useParams } from "react-router-dom";

const PlacesCard = ({ img }) => {
  const params = useParams();
  console.log(params);
  return (
    // <div className="places">
    <div className="places__card">
      <div className="places__card-inner">
        <div className="places__img">
          <img src={img} alt="adventure location" />
          <div className="favourite__place">
            <i className="fa-solid fa-heart"></i>
          </div>
        </div>
        <div className="places__desc">
          <div className="d-flex-between mt-2">
            <p>Desert King</p>
            <h6>1MBT per night</h6>
          </div>
          <div className="stay__details d-flex-between">
            <p>2345km away</p>
            <p>available for 2weeks stay</p>
          </div>
          <div className="rating d-flex gap-2">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default PlacesCard;

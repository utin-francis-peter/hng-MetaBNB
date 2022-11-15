import React from "react";
import PlacesCard from "../components/shared/PlacesCard";
import { PlacesToVisit } from "../data/places";
import FrontLayout from "../layouts/FrontLayout";

const PlaceToStay = () => {
  return (
    <FrontLayout>
      <section className="place-to-stay container ">
        <div className="filters-wrapper">
          {Filter.map((item) => (
            <button key={item.name}>{item.name}</button>
          ))}
          <div className="search__input__wrapper">
            <input type="text" placeholder="location" />
            <img src="./assets/images/setting.svg" alt="setting" />
          </div>
        </div>

        <section className="places ">
          {PlacesToVisit.map((place) => (
            <PlacesCard key={place.img} img={place.img} />
          ))}
        </section>
      </section>
    </FrontLayout>
  );
};

export default PlaceToStay;

const Filter = [
  {
    name: "Restaurant",
  },
  {
    name: "Cottage",
  },
  {
    name: "Castle",
  },
  {
    name: "Fantast city",
  },
  {
    name: "Beach",
  },
  {
    name: "Carbins",
  },
  {
    name: "Off-grid",
  },
  {
    name: "Farm",
  },
];

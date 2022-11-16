import React from "react";
import PlacesCard from "../components/shared/PlacesCard";
import { PlacesHome } from "../data/places";
import FrontLayout from "../layouts/FrontLayout";

const HomePage = () => {
  return (
    <FrontLayout>
      <main className="home__page">
        <section className="hero">
          <section className="container hero__inner">
            <article className="hero__desc">
              <h1 className="hero__desc-title">
                Rent a <span className="text-primary">Place</span> away from
                <span className="text-primary"> Home </span>
                in the <span className="text-primary">Metaverse</span>
              </h1>
              <p className="hero__desc-details">
                we provide you access to luxury and affordable houses in the
                metaverse, get a chance to turn your imagination to reality at
                your comfort zone
              </p>
              <form className="d-flex">
                <input type="text" placeholder="Search for location" />
                <button className="btn-lg text-light bg-primary">Search</button>
              </form>
            </article>
            <article className="hero__img">
              <img src="./assets/images/hero-banner.svg" alt="hero img" />
            </article>
          </section>

          <section className="hero__footer">
            <img src="./assets/images/chains/mbtoken.svg" alt="mbtoken" />
            <img
              src="./assets/images/chains/metamask-home.svg"
              alt="metamask"
            />
            <img src="./assets/images/chains/opensea-home.svg" alt="opensea" />
          </section>
        </section>

        <section className="adventure__inspirations__wrapper container">
          <h1 className="text-center title">
            Inspiration for your next adventure
          </h1>
          <section className="adventure__inspirations">
            {PlacesHome.map((place) => (
              <PlacesCard key={place.img} img={place.img} />
            ))}
          </section>
        </section>

        <section className="metabnb__nfts">
          <div className="metabnb__nfts-inner container">
            <article className="metabnb__nfts-desc">
              <h1>Metabnb NFTs</h1>
              <p className="mt-4 mb-4">
                Discover our NFT gift cards collection. Loyal customers gets
                amazing gift cards which are traded as NFTs. These NFTs gives
                our cutomer access to loads of our exclusive services.
              </p>
              <button className="btn-sm text-primary bg-light">
                Learn more
              </button>
            </article>
            <div className="metabnb__nfts-img">
              <img src="./assets/images/metabnb-nfts.svg" alt="metabnb nfts" />
            </div>
          </div>
        </section>
      </main>
    </FrontLayout>
  );
};

export default HomePage;

import React from "react";
import "./Home.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./HomeSlider.css";
const HomeSlider = () => {
  const config = {
    infinite: true,
    autoPlay: true,
    autoPlaySpeed: 2000,
    customTransition: "transform 0.8s ease-in-out",
    transitionDuration: 800,
    draggable: true,
    swipeable: true,
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const data = [
    {
      id: 1,
      subtitle: "Fresh & Organic",
      headTitle: "Delicious Seasonal Fruits",
      bgClass: "homepage-bg-1",
    },
    {
      id: 2,
      subtitle: "Fresh Everyday",
      headTitle: "100% Organic Collection",
      bgClass: "homepage-bg-2",
    },
    {
      id: 3,
      subtitle: "Mega Sale Going On!",
      headTitle: "Get December Discount",
      bgClass: "homepage-bg-3",
    },
  ];

  return (
    <>
      <Carousel responsive={responsive} infinite={true} {...config}>
        {data &&
          data.map((item, index) => (
            <div key={index} class="homepage-slider">
              <div class={`single-homepage-slider ${item.bgClass}`}>
                <div class="container">
                  <div class="row">
                    <div class="col-md-12 col-lg-7 offset-lg-1 offset-xl-0">
                      <div class="hero-text">
                        <div class="hero-text-tablecell">
                          <p class="subtitle">{item.subtitle}c</p>
                          <h1>{item.headTitle}</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </Carousel>
    </>
  );
};

export default HomeSlider;

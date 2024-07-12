import React from "react";
import backgroundImage from "../../../assets/image/home-slide2.jpg";
import "./Home.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const HomeSlider = () => {
  const config = { autoPlay: true, autoPlaySpeed: 2000 };
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
  return (
    <>
      {/* <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          minHeight: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="wrap-page"></div>
        </div>
      </div> */}

      <Carousel responsive={responsive} infinite={true} {...config}>
        <div class="homepage-slider">
          <div class="single-homepage-slider homepage-bg-1">
            <div class="container">
              <div class="row">
                <div class="col-md-12 col-lg-7 offset-lg-1 offset-xl-0">
                  <div class="hero-text">
                    <div class="hero-text-tablecell">
                      <p class="subtitle">Fresh & Organic</p>
                      <h1>Delicious Seasonal Fruits</h1>
                      <div class="hero-btns">
                        <a href="shop.html" class="boxed-btn">
                          Fruit Collection
                        </a>
                        <a href="contact.html" class="bordered-btn">
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="homepage-slider">
          <div class="single-homepage-slider homepage-bg-2">
            <div class="container">
              <div class="row">
                <div class="col-lg-10 offset-lg-1 text-center">
                  <div class="hero-text">
                    <div class="hero-text-tablecell">
                      <p class="subtitle">Fresh Everyday</p>
                      <h1>100% Organic Collection</h1>
                      <div class="hero-btns">
                        <a href="shop.html" class="boxed-btn">
                          Visit Shop
                        </a>
                        <a href="contact.html" class="bordered-btn">
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="homepage-slider">
          <div class="single-homepage-slider homepage-bg-3">
            <div class="container">
              <div class="row">
                <div class="col-lg-10 offset-lg-1 text-right">
                  <div class="hero-text">
                    <div class="hero-text-tablecell">
                      <p class="subtitle">Mega Sale Going On!</p>
                      <h1>Get December Discount</h1>
                      <div class="hero-btns">
                        <a href="shop.html" class="boxed-btn">
                          Visit Shop
                        </a>
                        <a href="contact.html" class="bordered-btn">
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default HomeSlider;

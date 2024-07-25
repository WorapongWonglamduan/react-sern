import React, { useEffect, useState } from "react";
import HomeSlider from "./HomeSlider";
import FeatureProduct from "./FeatureProduct";

import JsonData from "../../data/data.json";
import Service from "./Service";
import About from "./About";
import LoadingOverlay from "../../Loading/LoadingOverLay";
import Auth from "../auth/Auth";

const Home = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <LoadingOverlay loading={loading}>
      <HomeSlider />
      <About data={landingPageData.About} />
      <Service data={landingPageData.Services} />
      <FeatureProduct />
      <Auth setLoading={setLoading} />
    </LoadingOverlay>
  );
};

export default Home;

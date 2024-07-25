import React, { useEffect, useState } from "react";
import "./Home.css";
import "./FeatureProduct.css";
import Filter from "../../utils/filter-motion/Filter";
import { motion, AnimatePresence } from "framer-motion";
import { dataFilter } from "../../data/dataFilter";
import CardFilter from "../../utils/filter-motion/CardFilter";
const FeatureProduct = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);

  const getData = async () => {
    setAllProducts(dataFilter);
    setFiltered(dataFilter);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <section
        id="feature"
        style={{
          // background:
          //   "linear-gradient(45.21deg, rgba(0, 0, 0,0.8) 70.01%, #4a2fbd 100.59%)",
          // minHeight: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="wrap-page">
            <div className="text-center">
              <h1 className="fw-bold">Featured Product</h1>
            </div>
            <Filter
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              allProducts={allProducts}
              setFiltered={setFiltered}
            />
            <motion.div layout className="popular-movies">
              <AnimatePresence>
                {filtered &&
                  filtered.map((product) => {
                    return <CardFilter product={product} key={product.id} />;
                  })}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureProduct;

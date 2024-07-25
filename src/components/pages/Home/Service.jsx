import React from "react";
import "./Service.css";
const Service = (props) => {
  return (
    <section id="service">
      <div className="services text-center">
        <div className="container">
          <div className="services__section-title">
            <h2 className="fw-bold">Our Services</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p>
          </div>
          <div className="row">
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className="col-md-4">
                    <i className={d.icon}></i>
                    <div className="services__service-desc">
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;

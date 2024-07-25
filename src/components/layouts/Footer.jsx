import React from "react";
import { Img } from "../../assets/image/hookImg";
import "./Footer.css";
import moment from "moment";
const Footer = () => {
  const btnLoginSocial = [
    { name: "Facebook", className: "btn-facebook", icon: Img.iconFb },
    { name: "Twitter", className: "btn-twitter", icon: Img.iconTw },
    { name: "Gmail", className: "btn-gmail", icon: Img.iconGmail },
    { name: "LinkedIn", className: "btn-linkedin", icon: Img.iconLn },
  ];

  const footerDetails = [
    {
      title: "Company",
      children: [
        { text: "Home", href: "#home" },
        { text: "About Us", href: "#about" },
        { text: "Service", href: "#service" },
        { text: "Feature", href: "#feature" },
      ],
    },
    {
      title: "Account",
      children: [
        { text: "Login", href: "#auth" },
        { text: "Register", href: "#auth" },
        { text: "Members", href: "#auth" },
      ],
    },
    {
      title: "Legal",
      children: [
        { text: "Privacy Policy", href: "#home" },
        { text: "Terms of Use", href: "#home" },
        { text: "Cookies", href: "#home" },
        { text: "Disclaimer", href: "#home" },
      ],
    },
  ];
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 me-auto">
            <div className="navbar-brand">
              <h3>Logo</h3>
              <span>Lorem, ipsum dolor.</span>
            </div>
            <ul className="socials">
              {btnLoginSocial.map((item, index) => (
                <li key={index}>
                  <a href="#home" title={item.name}>
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="btn-icon icon-white"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {footerDetails.map((item, index) => (
            <div key={index} className="col-md-2">
              <h5 className="title">{item.title}</h5>
              <ul className="nav flex-column">
                {item.children.map((child, idx) => (
                  <li key={idx} className="nav-item mb-2">
                    <a href={child.href} className="nav-link p-0">
                      {child.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr />

        <p className="m-0 company-build">
          © {moment().format("YYYY")} LOGO Limited – All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

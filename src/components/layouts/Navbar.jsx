import React, { useEffect, useMemo, useState } from "react";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Avatar, Space, Dropdown } from "antd";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../utils/utils-fuc";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Navbar = ({ user }) => {
  const dispatch = useDispatch();

  const imageUser =
    user !== null ? require("../../assets/image/imgprofie.jpg") : "";

  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const allSection = [
    { id: 1, name: "home" },
    { id: 2, name: "about" },
    { id: 3, name: "service" },
    { id: 4, name: "feature" },
  ];
  const items = [
    user && {
      key: "1",
      label: (
        <NavLink
          onClick={() => onLogout()}
          style={{ fontWeight: "bold", textDecoration: "none" }}
        >
          Logout
        </NavLink>
      ),
    },
    !user && {
      key: "2",
      label: (
        <a
          href="#auth"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("auth")
              .scrollIntoView({ behavior: "smooth" });
          }}
          style={{ fontWeight: "bold", textDecoration: "none" }}
        >
          Login
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <NavLink
          to={"/admin/"}
          style={{ fontWeight: "bold", textDecoration: "none" }}
        >
          Admin Mode
        </NavLink>
      ),
    },
  ];

  const onLogout = () => {
    dispatch({ type: "LOGOUT", payload: null });
    toast.success("Logout");
  };

  useEffect(() => {
    const onScroll = () => {
      //has scroll
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section");

      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop - sectionHeight / 3 &&
          scrollPosition < sectionTop + sectionHeight - sectionHeight / 3
        ) {
          setActiveSection(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`header  ${scrolled ? "scrolled" : ""}`}>
      <a className="logo" href="#home">
        Logo
      </a>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="icons">
        <i className="bx bx-menu" id="menu-icon"></i>
        <i className="bx bx-x" id="close-icon"></i>
      </label>
      <nav className="navbar">
        {allSection.map((item, index) => {
          return (
            <a
              key={index}
              style={{ "--i": index }}
              href={`#${item.name}`}
              className={`${
                activeSection === item.name
                  ? "navbar__text navbar__text--shadow"
                  : ""
              }`}
            >
              {capitalizeFirstLetter(item.name)}
            </a>
          );
        })}

        <Link className="nav-action-btn" style={{ "--i": 4 }}>
          <Space direction="horizontal" size={16}>
            <Space wrap size={16}>
              <Avatar size={40} icon={<ShoppingCartOutlined />} />
              <Dropdown
                menu={{
                  items,
                }}
              >
                <Avatar src={imageUser} size={40} icon={<UserOutlined />} />
              </Dropdown>
            </Space>
          </Space>
        </Link>
      </nav>
      <Link className="action-btn">
        <Space direction="vertical" size={16}>
          <Space wrap size={16}>
            <Avatar size={40} icon={<ShoppingCartOutlined />} />

            <Dropdown
              menu={{
                items,
              }}
            >
              <Avatar src={imageUser} size={40} icon={<UserOutlined />} />
            </Dropdown>
          </Space>
        </Space>
      </Link>
    </header>
  );
};

export default Navbar;

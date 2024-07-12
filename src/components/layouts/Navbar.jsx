import React, { useEffect, useState } from "react";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Avatar, Space, Dropdown } from "antd";
import "./Navbar.css";
import { Link } from "react-router-dom";

const items = [
  {
    key: "1",
    label: (
      <Link style={{ fontWeight: "bold", textDecoration: "none" }}>
        profile
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link style={{ fontWeight: "bold", textDecoration: "none" }}>
        details
      </Link>
    ),
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`header  ${scrolled ? "scrolled" : ""}`}>
      <Link className="logo">Logo</Link>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="icons">
        <i className="bx bx-menu" id="menu-icon"></i>
        <i className="bx bx-x" id="close-icon"></i>
      </label>
      <nav className="navbar">
        <Link style={{ "--i": 0 }}>Home</Link>
        <Link style={{ "--i": 1 }}>About</Link>
        <Link style={{ "--i": 2 }}>Gallery</Link>
        <Link style={{ "--i": 3 }}>Services</Link>
        <Link className="nav-action-btn" style={{ "--i": 4 }}>
          <Space direction="horizontal" size={16}>
            <Space wrap size={16}>
              <Avatar size={40} icon={<ShoppingCartOutlined />} />
              <Dropdown
                menu={{
                  items,
                }}
              >
                <Avatar
                  src={require("../../assets/image/imgprofie.jpg")}
                  size={40}
                  icon={<UserOutlined />}
                />
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
              <Avatar
                src={require("../../assets/image/imgprofie.jpg")}
                size={40}
                icon={<UserOutlined />}
              />
            </Dropdown>
          </Space>
        </Space>
      </Link>
    </header>
  );
};

export default Navbar;

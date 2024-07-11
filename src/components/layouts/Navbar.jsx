import React, { useEffect, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
    <header className="header">
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
        <Link style={{ "--i": 4 }}>Contact</Link>
      </nav>
    </header>
  );
};

export default Navbar;

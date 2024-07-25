import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import "./NavbarAdmin.css";
import { Avatar, Dropdown } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const NavbarAdmin = ({ setCollaps, user }) => {
  const dispatch = useDispatch();

  const imageUser =
    user !== null ? require("../../assets/image/imgprofie.jpg") : "";

  const items = [
    user && {
      key: "1",
      label: (
        <Link
          to={"/"}
          onClick={() => onLogout()}
          style={{ fontWeight: "bold", textDecoration: "none" }}
        >
          Logout
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link to={"/"} style={{ fontWeight: "bold", textDecoration: "none" }}>
          Home User
        </Link>
      ),
    },
  ];

  const onLogout = () => {
    dispatch({ type: "LOGOUT", payload: null });
    toast.success("Logout");
  };

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
    <Navbar
      expand="lg"
      sticky="top"
      className={`bg-body-tertiary ${
        scrolled ? "bg-body-tertiary--active" : ""
      }`}
    >
      <Container fluid>
        <Link to={"/admin/"} style={{ textDecoration: "none", color: "#000" }}>
          <Navbar.Brand className="fw-bold">Admin</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {/* <NavDropdown title="" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/">HomePage</NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link
              className="icons-collaps-sidebar"
              onClick={() => {
                setCollaps((prev) => ({ ...prev, sideBar: !prev.sideBar }));
              }}
            >
              <MenuOutlined />
            </Nav.Link>
          </Nav>
          <Nav>
            <Dropdown
              menu={{
                items,
              }}
            >
              <Avatar
                src={imageUser}
                size={40}
                icon={<UserOutlined />}
                style={{ cursor: "pointer" }}
              />
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarAdmin;

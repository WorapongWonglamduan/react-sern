import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
const SidebarAdmin = ({ children, collaps }) => {
  return (
    <div style={{ display: "flex", height: "100%", minHeight: "88vh" }}>
      <Sidebar collapsed={collaps} /* toggled={collaps} */ breakPoint="md">
        <Menu>
          <SubMenu label="Manage Users">
            <Link
              to={"/admin/"}
              style={{ textDecoration: "none", color: "#000" }}
            >
              <MenuItem>Users List</MenuItem>
            </Link>
          </SubMenu>
          <Link to={"/"} style={{ textDecoration: "none", color: "#000" }}>
            <MenuItem> Home User </MenuItem>
          </Link>
        </Menu>
      </Sidebar>
      <main style={{ padding: 10, width: "100%" }}>
        <>{children}</>
      </main>
    </div>
  );
};

export default SidebarAdmin;

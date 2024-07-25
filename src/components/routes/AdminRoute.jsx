import React, { useEffect, useMemo, useState } from "react";

import NavbarAdmin from "../layouts/NavbarAdmin";
import SidebarAdmin from "../layouts/SidebarAdmin";
import { shallowEqual, useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingToRedirect";
import { toast } from "react-toastify";

//  children is content render
const AdminRoute = ({ children }) => {
  const { user } = useSelector((state) => ({ user: state }), shallowEqual);
  const memoizedUser = useMemo(() => user.user.user, [user]);
  const [isAdmin, setIsAdmin] = useState(false);

  const [collaps, setCollaps] = useState({ sideBar: false });
  useEffect(() => {
    if (memoizedUser && memoizedUser.roles === "admin") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
      setTimeout(() => {
        toast.warn("no have permission access !");
      }, 500);
    }
  }, [memoizedUser]);

  return (
    <>
      {isAdmin ? (
        <>
          <NavbarAdmin setCollaps={setCollaps} user={memoizedUser} />
          <SidebarAdmin children={children} collaps={collaps.sideBar} />
        </>
      ) : (
        <>
          <LoadingToRedirect />
        </>
      )}
    </>
  );
};

export default AdminRoute;

import React, { useMemo } from "react";
import Navbar from "../layouts/Navbar";
import { shallowEqual, useSelector } from "react-redux";
import Footer from "../layouts/Footer";

//  children is content render
const UserRoute = ({ children }) => {
  const { user } = useSelector((state) => ({ user: state }), shallowEqual);
  const memoizedUser = useMemo(() => user.user.user, [user]);
  return (
    <>
      <Navbar user={memoizedUser} />
      {children}
      <Footer />
    </>
  );
};

export default UserRoute;

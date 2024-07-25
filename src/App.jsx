import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/pages/home/Home";
import HomeAdmin from "./components/pages/admin/HomeAdmin";
import EditUsers from "./components/pages/admin/EditUsers";
import AdminRoute from "./components/routes/AdminRoute";
import UserRoute from "./components/routes/UserRoute";
import LoadingToRedirect from "./components/routes/LoadingToRedirect";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        {/* Admin Routes */}
        <Route
          path="/admin/*"
          element={
            <AdminRoute>
              <Routes>
                <Route path="/" element={<HomeAdmin />} />
                <Route path="edit-user/:id" element={<EditUsers />} />
                <Route path="*" element={<LoadingToRedirect />} />
              </Routes>
            </AdminRoute>
          }
        />

        {/* User Routes */}
        <Route
          path="/*"
          element={
            <UserRoute>
              <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/userTest" element={<RepeatedHome />} />
                <Route
                  path="*"
                  element={
                    <LoadingToRedirect
                      children={
                        <div
                          style={{
                            height: "100vh",
                            width: "100vw",
                          }}
                        ></div>
                      }
                    />
                  }
                />
              </Routes>
            </UserRoute>
          }
        />
      </Routes>
    </div>
  );
};

// TEST
const RepeatedHome = () => {
  return (
    <>
      <Home />
      <Home />
      <Home />
      <Home />
      <Home />
      <Home />
    </>
  );
};

export default App;

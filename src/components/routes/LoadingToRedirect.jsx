import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingOverLay from "../Loading/LoadingOverLay";

const LoadingToRedirect = ({ children }) => {
  const navigate = useNavigate();

  const [count, setCount] = useState(3);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => {
        return --currentCount;
      });
    }, 1000);

    //Redirect
    count === 0 && navigate("/");

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);
  return <LoadingOverLay loading={true} children={children} />;
};

export default LoadingToRedirect;

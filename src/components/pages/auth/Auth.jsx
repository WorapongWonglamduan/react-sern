import React, { useEffect, useState } from "react";
import "./Auth.css";
import ReactCardFlip from "react-card-flip";
import Register from "./Register";
import Login from "./Login";
import { getUser } from "../../apis/baseApi";

const Auth = ({ loading, setLoading }) => {
  const [isFlip, setFlip] = useState({ flip: false, page: "register" });
  const [allUsers, setAllUsers] = useState([]);
  const getData = async () => {
    const res = await getUser();
    if (res.status === 200) {
      setAllUsers(res?.data?.users);
    }
  };
  //first load
  useEffect(() => {
    getData();
  }, []);

  return (
    <section id="auth">
      <ReactCardFlip isFlipped={isFlip.flip}>
        <Login
          setFlip={setFlip}
          loading={loading}
          setLoading={setLoading}
          allUsers={allUsers}
        />
        <Register
          setFlip={setFlip}
          loading={loading}
          setLoading={setLoading}
          refetch={() => {
            getData();
          }}
        />
      </ReactCardFlip>
    </section>
  );
};

export default Auth;

{
  /*  3 page  */
}
{
  /* <ReactCardFlip isFlipped={isFlip.flip}>
        <SectionAuth
          setFlip={setFlip}
          loading={loading}
          setLoading={setLoading}
        />
        <RenderPage
          isFlip={isFlip}
          setFlip={setFlip}
          loading={loading}
          setLoading={setLoading}
        />
      </ReactCardFlip> */
}
//  3 content
// const SectionAuth = ({ setFlip }) => {
//   return (
//     <div className="wrap-auth">
//       <div className="container">
//         <div className="row" style={{ minHeight: "100vh", padding: "16.5% 0" }}>
//           <div className="col-md-6 mx-auto text-center">
//             <h2 className="mb-4 fw-bold">Join Our Community Today!</h2>
//             <h4>
//               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
//               ipsam dignissimos, amet voluptatibus possimus in? .Lorem ipsum
//               dolor sit, amet voluptatibus possimus in? .Lorem ipsum dolor sit,
//               amet voluptatibus possimus in? .Lorem ipsum dolor sit
//             </h4>
//             <button
//               onClick={() =>
//                 setFlip((prev) => ({
//                   ...prev,
//                   flip: !prev.flip,
//                   page: "login",
//                 }))
//               }
//               className="btn  btn-outline-dark ms-md-2 mt-2 mt-md-0"
//             >
//               Login
//             </button>
//             <div className="w-100 d-md-none"></div>
//             <button
//               onClick={() =>
//                 setFlip((prev) => ({
//                   ...prev,
//                   flip: !prev.flip,
//                   page: "register",
//                 }))
//               }
//               className="btn  btn-outline-dark ms-md-2 mt-2 mt-md-0"
//             >
//               Create Account
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const RenderPage = ({ isFlip, setFlip, loading, setLoading }) => {
//   return (
//     <>
//       {isFlip?.page === "register" ? (
//         <Register setFlip={setFlip} loading={loading} setLoading={setLoading} />
//       ) : (
//         isFlip?.page === "login" && (
//           <Login setFlip={setFlip} loading={loading} setLoading={setLoading} />
//         )
//       )}
//     </>
//   );
// };

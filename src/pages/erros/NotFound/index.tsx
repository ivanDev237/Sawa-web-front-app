import React from "react";
import notFound from "../../../Assets/imgs/not-found.png";

const NotFound = () => {
  return (
    <div className="grid place-items-center h-screen ">
      <img
        src={notFound}
        alt="Description de l'image"
        style={{ width: "350px", height: "auto", borderRadius: "50%" }}
      />{" "}
    </div>
  );
};

export default NotFound;

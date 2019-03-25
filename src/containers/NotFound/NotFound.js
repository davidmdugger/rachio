import React from "react";
import notFoundGif from "../../images/not-found.gif";

export default () => (
  <div
    style={{
      position: "relative",
      top: "0",
      left: "0",
      width: "100vw",
      height: "100vh"
    }}
  >
    <img style={{ width: "100%" }} src={notFoundGif} alt="not found" />
  </div>
);

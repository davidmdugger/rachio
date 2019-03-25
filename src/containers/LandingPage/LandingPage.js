import React from "react";

import "./styles.scss";

export default () => (
  <div id="landing">
    <div id="landing-content">
      <h1>Rachio Code Challenge</h1>
      <h5>by David Dugger</h5>
      <div className="btn-container">
        <a
          href="https://github.com/davidmdugger/rachio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn main">Github Repo</button>
        </a>
        <button className="btn main">Login</button>
      </div>
    </div>
  </div>
);

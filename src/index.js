import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Test() {
  const [stars, setStars] = useState(0);
  return (
    <div>
      <StarRating color="black" maxRating={10} setStars={setStars} />
      <p>This movie is rated with {stars} stars</p>
    </div>
  );
}
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={"ggggg"}
      massages={["Terrible", "Bad", "Okey", "Good", "Amazing"]}
    /> */}

    {/* <Test /> */}
  </React.StrictMode>,
);

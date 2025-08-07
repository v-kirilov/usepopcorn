import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';

import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = React.useState(0);

  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was ratet {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating onSetRating={() => {}} />
    <StarRating
      messages={["Terrible", "Bad", "Okay", "Good", "Excellent"]}
      defaultRating={3} onSetRating={() => {}}
    /> */}
    {/* <Test></Test> */}
  </React.StrictMode>
);

function Star() {
  return <span>⭐</span>;
}

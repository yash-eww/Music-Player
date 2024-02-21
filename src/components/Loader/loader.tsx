import React from "react";
import "./loader.css";

type Props = {};

const Loader = (props: Props) => {
  return (
    <div className="loading">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Loader;

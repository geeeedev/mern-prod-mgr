import React from "react";
import PrdList from "./PrdList";
import NewPrd from "./NewPrd";

const Main = (props) => {
  return (
    <>
      <NewPrd />
      <hr />
      <PrdList />
    </>
  );
};

export default Main;

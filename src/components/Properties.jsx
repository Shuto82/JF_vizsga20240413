import React from "react";
import { SinglePropertie } from "./SinglePropertie";
import { properties } from "../data";

export const Properties = () => {
  return (
    <div className="container" style={{maxWidth: "1200px"}}>
      <h3 className="text-center my-3">Aktuális ingatlan kínálatunk </h3>
      <div className="row flex-wrap justify-content-center" style={{alignItems: "stretch"}} >
        {properties.map((obj) => (
          <SinglePropertie obj={obj} key={obj.id} />
        ))}
      </div>
    </div>
  );
};

import React from "react";

export default function City({ city }) {
  return (
    <div>
      {city.map((item) => {
        <li>{item.name}</li>;
      })}
    </div>
  );
}

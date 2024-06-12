/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

function SheepList({ size }) {
  const listaOvejas = Array(size).fill(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9n4XA-95g3Hrngeh5hEkU6gfZ-hgyPw84zA&s"
  );
  return (
    <div>
      {listaOvejas.map((oveja, index) => (
        <img
          className="sheep__img"
          key={index}
          src={oveja}
          alt="Imagen Oveja"
        />
      ))}
    </div>
  );
}

export default SheepList;

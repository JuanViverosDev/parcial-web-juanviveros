import React, { useState } from "react";

const TimeConversor = (props) => {
  const [seconds, setSeconds] = useState(0);

  const convert = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds - hours * 3600) / 60);
    const secs = seconds - hours * 3600 - minutes * 60;
    console.log("Punto 1", `La conversión es: ${hours}:${minutes}:${secs}`);
  };

  return (
    <>
      <h1>Punto 1:</h1>
      <input
        type="number"
        value={seconds}
        onChange={(e) => setSeconds(e.target.value)}
      />
      <button onClick={() => convert(seconds)}>Convertir</button>
    </>
  );
};

export default TimeConversor;

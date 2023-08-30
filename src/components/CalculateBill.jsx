import React, { useState } from "react";

const CalculateBill = (props) => {
  const [minutes, setMinutes] = useState(0);

  const calculate = (minutes) => {
    let bill = 300;
    if (minutes < 3) {
      console.log(`El precio a pagar será de: $${bill} pesos`);
    } else {
      bill += (minutes - 3) * 50;
      console.log(`El precio a pagar será de: $${bill} pesos`);
    }
  };

  return (
    <>
      <h1>Punto 2:</h1>
      <input
        type="number"
        value={minutes}
        onChange={(e) => setMinutes(e.target.value)}
      />
      <button onClick={() => calculate(minutes)}>Calcular</button>
    </>
  );
};

export default CalculateBill;

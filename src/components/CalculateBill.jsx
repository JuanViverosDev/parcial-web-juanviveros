import React, { useState } from "react";

const CalculateBill = (props) => {
  const [minutes, setMinutes] = useState(0);
  const [bill, setBill] = useState(0);

  const calculate = (minutes) => {
    let newBill = 300;
    if (minutes < 3) {
      console.log(`El precio a pagar será de: $${newBill} pesos`);
      setBill(newBill);
      setMinutes(0);
    } else {
      newBill += (minutes - 3) * 50;
      console.log(`El precio a pagar será de: $${newBill} pesos`);
      setBill(newBill);
      setMinutes(0);
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
      {bill > 0 && <p>El precio a pagar será de: ${bill} pesos</p>}
    </>
  );
};

export default CalculateBill;

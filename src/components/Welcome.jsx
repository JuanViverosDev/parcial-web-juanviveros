import React, { useState } from "react";

const Welcome = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [time, setTime] = useState("");

  const determineMessage = (name, time) => {
    if (name === "") {
      setMessage("Nombre no válido");
      return;
    }
    if (time >= "06:00:00" && time <= "12:00:00") {
      setMessage(`Buenos días ${name}`);
    } else if (time >= "12:01:00" && time <= "19:00:00") {
      setMessage(`Buenas tardes ${name}`);
    } else if (time >= "19:01:00" && time <= "23:59:59") {
      setMessage(`Buenas noches ${name}`);
    } else if (time >= "00:00:00" && time <= "05:59:59") {
      setMessage(`Buenas noches ${name}`);
    } else {
      setMessage("Hora no válida");
    }
  };

  return (
    <>
      <h1>Punto 3:</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <input type="time" onChange={(e) => setTime(e.target.value)} />
      <button
        onClick={() => {
          determineMessage(name, time);
        }}
      >
        Enviar
      </button>
      <p>{message}</p>
    </>
  );
};

export default Welcome;

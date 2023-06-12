import { useState, useEffect, useRef } from "react";

export const PlayerStatus = () => {
  const firstUpdate = useRef(true);
  const [counter, setCounter] = useState(0);
  const [status, setStatus] = useState("online");

  const toggleStatus = () => {
    if (status === "online") {
      setStatus("away");
    } else {
      setStatus("online");
    }
  };

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    setCounter((prevValue) => prevValue + 1);
  }, [status]);

  return (
    <div>
      <p>Status = {status}</p>
      <button onClick={toggleStatus}>Toggle status</button>
      <p>You have changed the status {counter} times</p>
    </div>
  );
};

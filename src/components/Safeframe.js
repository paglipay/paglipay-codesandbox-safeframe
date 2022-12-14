import { useState, useEffect, useCallback } from "react";

export default function Safeframe({ getItems, id }) {
  const [items, setItems] = useState([]);
  const handleMessage = useCallback(() => {
    console.log("Safeframe handleMessage getItems: ", id);
    setItems(getItems);
  }, [getItems, id]);

  useEffect(() => {
    console.log("Safeframe useEffect handleMessage: ", id);
    // window.addEventListener("message",handleMessage, false )
    return () => {
      console.log("Safeframe useEffect handleMessage return: ", id);
      // window.removeEventListener("message",handleMessage )
    };
  }, [handleMessage, id]);

  return (
    <>
      <h1 onClick={() => handleMessage()}>Safegrame HERE{id}!!!</h1>
      <ul>
        {items.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ul>
    </>
  );
}

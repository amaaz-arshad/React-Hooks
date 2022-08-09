import React, { useRef, useState } from "react";

function UseRefTutorial() {
  const inputRef = useRef(null);
  const [name, setName] = useState("Amaaz");

  const onClick = () => {
    inputRef.current.focus();
    setName(inputRef.current.value);
    inputRef.current.value = "";
  };
  return (
    <div>
      <h1>{name}</h1>
      <input type="text" placeholder="Enter name..." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
}

export default UseRefTutorial;

import { useState } from "react";

export const Message = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div>
      <a href="#" onClick={handleClick}>
        Want to buy a new car?
      </a>
      <p style={{ marginTop: "32px", opacity: showMessage ? 1 : 0 }}>
        Call +11 22 33 44 now!
      </p>
    </div>
  );
};

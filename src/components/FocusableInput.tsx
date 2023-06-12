import { forwardRef, useEffect, useRef, useState } from "react";

type TTextInputProps = { focused: boolean };

const TextInput = forwardRef<HTMLInputElement, TTextInputProps>(
  ({ focused }, ref) => {
    return (
      <input
        ref={ref}
        autoFocus={focused}
        style={{
          border: 0,
          padding: "8px",
          marginTop: "16px",
          borderRadius: "8px",
          fontFamily: "Inter",
        }}
      />
    );
  }
);

export const FocusableInput = ({ focused = true }: { focused: boolean }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputFocused, setInputFocused] = useState(focused);

  const handleClick = () => {
    setInputFocused(!inputFocused);
  };

  useEffect(() => {
    if (inputFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputFocused]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p>Focused prop = {inputFocused ? "true" : "false"}</p>
      <button onClick={handleClick}>Toggle focus</button>
      <TextInput focused={inputFocused} ref={inputRef} />
    </div>
  );
};

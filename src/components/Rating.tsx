import { useState } from "react";
import { Star } from "./Star";

const STARS = [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }];

export const Rating = () => {
  const [starsHovered, setStarsHovered] = useState<number | null>(null);
  const [starsSelected, setStarsSelected] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setStarsHovered(index);
  };

  const handleMouseLeave = () => {
    setStarsHovered(null);
  };

  const handleClick = (index: number) => {
    if (starsSelected === index) {
      setStarsSelected(null);
    } else {
      setStarsSelected(index);
    }
  };

  return (
    <div id="rating">
      <div
        style={{
          display: "flex",
          minWidth: "300px",
          marginBottom: "16px",
          justifyContent: "space-between",
        }}
      >
        <p>Stars hovered: {starsHovered === null ? "0" : starsHovered + 1}</p>
        <p>
          Stars selected: {starsSelected === null ? "0" : starsSelected + 1}
        </p>
      </div>
      {STARS.map((_, index) => (
        <span
          onClick={() => handleClick(index)}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={() => handleMouseEnter(index)}
        >
          <Star
            index={index}
            starsHovered={starsHovered}
            starsSelected={starsSelected}
          />
        </span>
      ))}
    </div>
  );
};

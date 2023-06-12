import { useEffect, useRef, useState } from "react";

const navList = [
  { id: 0, route: "Home" },
  { id: 1, route: "Search" },
  { id: 2, route: "Events" },
  { id: 3, route: "Profile" },
];

export const ListItemsForNavigation = () => {
  const activeItemRef = useRef<HTMLLIElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleKeyDown = ({ key }: { key: string }) => {
    switch (key) {
      case "ArrowUp":
        setSelectedIndex((prevIndex) =>
          prevIndex < navList.length - 1 ? prevIndex + 1 : 0
        );
        break;
      case "ArrowRight":
        setSelectedIndex((prevIndex) =>
          prevIndex < navList.length - 1 ? prevIndex + 1 : 0
        );
        break;
      case "ArrowDown":
        setSelectedIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : navList.length - 1
        );
        break;
      case "ArrowLeft":
        setSelectedIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : navList.length - 1
        );
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    activeItemRef.current?.focus();
  }, [selectedIndex]);

  return (
    <ul style={{ display: "flex" }} onKeyDown={handleKeyDown}>
      {navList.map(({ route, id }, index) => (
        <li
          key={id}
          tabIndex={0}
          autoFocus={index === 0}
          style={{
            listStyle: "none",
            display: "flex",
            margin: "8px",
            borderRadius: "8px",
          }}
          ref={index === selectedIndex ? activeItemRef : null}
        >
          <a style={{ margin: 0 }}>{route}</a>
        </li>
      ))}
    </ul>
  );
};

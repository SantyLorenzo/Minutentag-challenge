import { useState } from "react";

const LINKS = [
  {
    id: "00",
    src: "https://img.freepik.com/free-psd/portrait-happy-cardigan-welsh-corgi_53876-73961.jpg?w=740&t=st=1686527579~exp=1686528179~hmac=64dc52f2b4fb6328f8bf743e21577b2193a59af0b495d51554dc6ec22e214e0c",
  },
  {
    id: "01",
    src: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
  },
  {
    id: "02",
    src: "https://images.unsplash.com/photo-1497994187231-bc847a69dc76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
  },
];

type TImage = {
  src: string;
  onRemove: () => void;
};

const Image = ({ src, onRemove }: TImage) => {
  const [loading, setLoading] = useState(true);

  const onImageLoaded = () => {
    setLoading(false);
  };

  console.log(loading);

  return (
    <div
      style={{
        display: "flex",
        padding: "8px",
        borderRadius: "8px",
        alignItems: "center",
        marginBottom: "16px",
        border: "1px solid #919191",
      }}
    >
      <img
        src={src}
        onLoad={onImageLoaded}
        style={{
          width: "84px",
          height: "84px",
          marginRight: "16px",
          borderRadius: "8px",
        }}
      />
      <button onClick={onRemove}>X</button>
    </div>
  );
};

export const ImageGallery = ({ links = LINKS }) => {
  const [activeLinks, setActiveLinks] = useState(links);

  const handleClick = (id: string) => {
    setActiveLinks(activeLinks.filter((link) => link.id !== id));
  };

  const restoreList = () => {
    setActiveLinks(LINKS);
  };

  return (
    <div>
      {activeLinks.map(({ id, src }) => (
        <Image key={id} src={src} onRemove={() => handleClick(id)} />
      ))}

      {activeLinks.length === 0 && (
        <button onClick={restoreList}>Restore List</button>
      )}
    </div>
  );
};

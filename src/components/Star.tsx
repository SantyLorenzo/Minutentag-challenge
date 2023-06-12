const RATED_STAR = "https://img.icons8.com/ios-filled/50/919191/star--v1.png";
const UNRATED_STAR = "https://img.icons8.com/ios/50/919191/star--v1.png";

type TStar = {
  index: number;
  starsHovered: number | null;
  starsSelected: number | null;
};

export const Star = ({ index, starsHovered, starsSelected }: TStar) => {
  if (starsSelected !== null && starsSelected >= index) {
    return (
      <img
        src={RATED_STAR}
        alt="star--v1"
        style={{
          width: "32px",
          height: "32px",
          margin: "0px 6px",
        }}
      />
    );
  }

  if (starsHovered !== null && starsHovered >= index) {
    return (
      <img
        src={RATED_STAR}
        alt="star--v1"
        style={{
          width: "32px",
          height: "32px",
          margin: "0px 6px",
        }}
      />
    );
  }

  return (
    <img
      src={UNRATED_STAR}
      alt="star--v1"
      style={{
        width: "32px",
        height: "32px",
        margin: "0px 6px",
      }}
    />
  );
};

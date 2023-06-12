import { TeamsList } from "./components/TeamsList";
import { Grocery } from "./components/Grocery";
import { FocusableInput } from "./components/FocusableInput";
import { ImageGallery } from "./components/ImageGallery";
import { ListItemsForNavigation } from "./components/ListItemsForNavigation";
import { Message } from "./components/Message";
import { PlayerStatus } from "./components/PlayerStatus";
import { Rating } from "./components/Rating";

export const routes = [
  {
    path: "Grocery",
    element: <Grocery />,
  },
  {
    path: "FocusableInput",
    element: <FocusableInput focused={true} />,
  },
  {
    path: "ImageGallery",
    element: <ImageGallery />,
  },
  {
    path: "ListItemsForNavigation",
    element: <ListItemsForNavigation />,
  },
  {
    path: "Message",
    element: <Message />,
  },
  {
    path: "PlayerStatus",
    element: <PlayerStatus />,
  },
  {
    path: "TeamsList",
    element: <TeamsList />,
  },
  {
    path: "Rating",
    element: <Rating />,
  },
];

import "./App.css";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { routes } from "./routes";

const App = () => {
  return (
    <>
      <h1
        style={{
          top: 0,
          margin: "40px",
          color: "#919191",
          position: "absolute",
        }}
      >
        Minutentag Challenge
      </h1>

      <div
        style={{
          padding: "32px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        {routes.map(({ path }) => (
          <NavLink
            key={path}
            to={path}
            style={({ isActive }) => {
              return {
                boxShadow: isActive
                  ? "0px 0px 10px 1px rgba(145,145,145,1)"
                  : "none",
                WebkitBoxShadow: isActive
                  ? "0px 0px 10px 1px rgba(145,145,145,1)"
                  : "none",
                MozBoxShadow: isActive
                  ? "0px 0px 10px 1px rgba(145,145,145,1)"
                  : "none",
              };
            }}
          >
            {path}
          </NavLink>
        ))}
      </div>

      <div
        style={{
          width: "100%",
          padding: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Outlet />
      </div>
    </>
  );
};

export default App;

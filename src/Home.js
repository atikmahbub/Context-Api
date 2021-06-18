import React from "react";
import { useTheme, useUpdateTheme } from "./themeContext";

const Home = () => {
  const theme = useTheme();
  const toggleTheme = useUpdateTheme();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div>{theme ? "Dark" : "Light"}</div>
    </div>
  );
};

export default Home;

import React from "react";
import { ThemeProvider } from "./themeContext";
import Home from "./Home";
// import About from "./About";

// export const ValueContext = React.createContext();

const App = () => {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
};

export default App;

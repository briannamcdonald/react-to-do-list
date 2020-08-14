import React from "react";
import "./App.css";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import theme from "./theme";

import ToDoList from "./containers/ToDoList";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <div className="App">
        <ToDoList />
      </div>
    </ThemeProvider>
  );
}

export default App;

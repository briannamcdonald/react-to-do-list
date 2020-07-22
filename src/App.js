import React from 'react';
import './App.css';
import {ThemeProvider, CSSReset} from '@chakra-ui/core';

import ToDoList from './containers/ToDoList';

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <div className="App">
        <ToDoList />
      </div>
    </ThemeProvider>
  );
}

export default App;

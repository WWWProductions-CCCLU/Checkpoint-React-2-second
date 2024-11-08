// src/App.js

import React from "react";
import "./App.css"; // Import App-specific styles
import PlayersList from "./components/PlayersList";

function App() {
  return (
    <div className="App">
      <h1>FIFA Player Cards</h1>
      <PlayersList />
    </div>
  );
}

export default App;
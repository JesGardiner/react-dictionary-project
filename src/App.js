import React from "react";
import "./App.css";
import WordSearch from "./WordSearch";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          D I C T I O N A R Y
          <WordSearch />
        </header>
      </div>
      <footer className="App-footer">Coded by Jess Gardiner</footer>
    </div>
  );
}

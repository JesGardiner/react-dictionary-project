import React from "react";
import './App.css';
import WordSearch from "./WordSearch";

export default function App() {
  return (
    <div className="App">
      <div className="comntainer">
        <header className="App-header">Hello from App</header>
        <main>
          <WordSearch />
        </main>
      </div>
    </div>
  );
}

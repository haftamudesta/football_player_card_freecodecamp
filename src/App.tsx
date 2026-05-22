import React, { useState, useEffect } from "react";
import "./styles/App.css";
import PlayerCard from "./components/PlayerCard";
import PlayerForm from "./components/PlayerForm";
import { type PlayerData } from "./types";
import { loadPlayer, savePlayer } from "./utils/playerUtils";

function App() {
  const [player, setPlayer] = useState<PlayerData>(loadPlayer());

  useEffect(() => {
    savePlayer(player);
  }, [player]);

  return (
    <div className="page">
      <header className="header">
        <div className="header-inner">
          <p className="header-title">Football Card Builder</p>
          <p className="header-subtitle">Customize your player card</p>
        </div>
      </header>
      <main className="main">
        <div className="layout">
          <PlayerForm player={player} setPlayer={setPlayer} />
          <div className="preview-panel">
            <p className="preview-label">Live Preview</p>
            <p className="preview-hint">Updates as you type</p>
            <div className="preview-box">
              <PlayerCard player={player} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

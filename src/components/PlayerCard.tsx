import React from "react";
import { type PlayerData } from "../types";
import { getPlayerTier } from "../utils/playerUtils";

interface PlayerCardProps {
  player: PlayerData;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  const tier = getPlayerTier(player.overallRating);

  return (
    <div className={`card-wrapper tier-${tier}`}>
      <div className="card">
        <div className="card-header">
          <div>
            <div className="card-rating">{player.overallRating}</div>
            <div className="card-position">{player.position}</div>
          </div>
          <div className="card-header-right">
            <div className="card-tier-badge">{tier.toUpperCase()}</div>
            <div className="card-club">{player.club}</div>
          </div>
        </div>
        <div className="card-image-wrap">
          <img
            src={player.imageUrl}
            alt={`${player.name} headshot`}
            className="card-image"
          />
        </div>
        <div className="card-name-strip">
          <span className="card-name">{player.name}</span>
        </div>
        <div className="card-stats">
          <div className="stat-col">
            <div className="stat-row">
              <span className="stat-value">{player.pac}</span>
              <span className="stat-label">PAC</span>
            </div>
            <div className="stat-row">
              <span className="stat-value">{player.sho}</span>
              <span className="stat-label">SHO</span>
            </div>
            <div className="stat-row">
              <span className="stat-value">{player.pas}</span>
              <span className="stat-label">PAS</span>
            </div>
          </div>
          <div className="stat-divider" />
          <div className="stat-col">
            <div className="stat-row">
              <span className="stat-value">{player.dri}</span>
              <span className="stat-label">DRI</span>
            </div>
            <div className="stat-row">
              <span className="stat-value">{player.def}</span>
              <span className="stat-label">DEF</span>
            </div>
            <div className="stat-row">
              <span className="stat-value">{player.phy}</span>
              <span className="stat-label">PHY</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;

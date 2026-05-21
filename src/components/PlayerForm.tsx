import React from "react";
import { PlayerData, POSITIONS, Position } from "../types";

interface PlayerFormProps {
  player: PlayerData;
  setPlayer: React.Dispatch<React.SetStateAction<PlayerData>>;
}

const PlayerForm: React.FC<PlayerFormProps> = ({ player, setPlayer }) => {
  const updateField = <K extends keyof PlayerData>(
    field: K,
    value: PlayerData[K],
  ) => {
    setPlayer((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="form-panel">
      <div className="form-section">
        <p className="form-section-title">Player Info</p>
        <div className="form-group">
          <label className="label" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            className="input"
            type="text"
            value={player.name}
            onChange={(e) => updateField("name", e.target.value)}
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label className="label" htmlFor="position">
              Position
            </label>
            <select
              id="position"
              className="input"
              value={player.position}
              onChange={(e) =>
                updateField("position", e.target.value as Position)
              }
            >
              {POSITIONS.map((pos) => (
                <option key={pos} value={pos}>
                  {pos}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label className="label" htmlFor="overallRating">
              Overall
            </label>
            <input
              id="overallRating"
              className="input"
              type="number"
              value={player.overallRating}
              onChange={(e) =>
                updateField("overallRating", Number(e.target.value))
              }
            />
          </div>
        </div>
        <div className="form-group">
          <label className="label" htmlFor="club">
            Club
          </label>
          <input
            id="club"
            className="input"
            type="text"
            value={player.club}
            onChange={(e) => updateField("club", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="imageUrl">
            Image URL
          </label>
          <input
            id="imageUrl"
            className="input"
            type="text"
            value={player.imageUrl}
            onChange={(e) => updateField("imageUrl", e.target.value)}
          />
        </div>
      </div>
      <div className="form-section">
        <p className="form-section-title">Player Stats</p>
        <div className="stats-grid">
          <div className="form-group">
            <label className="label" htmlFor="pac">
              PAC
            </label>
            <input
              id="pac"
              className="input"
              type="number"
              value={player.pac}
              onChange={(e) => updateField("pac", Number(e.target.value))}
            />
          </div>
          <div className="form-group">
            <label className="label" htmlFor="sho">
              SHO
            </label>
            <input
              id="sho"
              className="input"
              type="number"
              value={player.sho}
              onChange={(e) => updateField("sho", Number(e.target.value))}
            />
          </div>
          <div className="form-group">
            <label className="label" htmlFor="pas">
              PAS
            </label>
            <input
              id="pas"
              className="input"
              type="number"
              value={player.pas}
              onChange={(e) => updateField("pas", Number(e.target.value))}
            />
          </div>
          <div className="form-group">
            <label className="label" htmlFor="dri">
              DRI
            </label>
            <input
              id="dri"
              className="input"
              type="number"
              value={player.dri}
              onChange={(e) => updateField("dri", Number(e.target.value))}
            />
          </div>
          <div className="form-group">
            <label className="label" htmlFor="def">
              DEF
            </label>
            <input
              id="def"
              className="input"
              type="number"
              value={player.def}
              onChange={(e) => updateField("def", Number(e.target.value))}
            />
          </div>
          <div className="form-group">
            <label className="label" htmlFor="phy">
              PHY
            </label>
            <input
              id="phy"
              className="input"
              type="number"
              value={player.phy}
              onChange={(e) => updateField("phy", Number(e.target.value))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerForm;

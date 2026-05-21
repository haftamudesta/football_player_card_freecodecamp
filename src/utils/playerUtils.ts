import { type PlayerData, STORAGE_KEY, defaultPlayer } from '../types';

export function getPlayerTier(rating: number): string {
  if (rating >= 92) return 'elite';
  if (rating >= 85) return 'gold';
  if (rating >= 75) return 'silver';
  return 'bronze';
}

export function loadPlayer(): PlayerData {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return { ...defaultPlayer, ...JSON.parse(saved) };
    }
  } catch (error) {
    console.log("Failed to load player data, using defaults:", error);
  }
  return defaultPlayer;
}

export function savePlayer(player: PlayerData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(player));
  } catch (error) {
    console.log("Failed to save player data:", error);
  }
}
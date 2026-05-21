export interface PlayerData {
  name: string;
  overallRating: number;
  position: Position;
  club: string;
  imageUrl: string;
  pac: number;
  sho: number;
  pas: number;
  dri: number;
  def: number;
  phy: number;
}

export const POSITIONS = ['GK', 'CB', 'LB', 'RB', 'CDM', 'CM', 'CAM', 'LW', 'RW', 'ST', 'CF'] as const;
export type Position = typeof POSITIONS[number];

export const STORAGE_KEY = 'football_player_card';

export const defaultPlayer: PlayerData = {
  name: 'PELE',
  overallRating: 98,
  position: 'ST',
  club: 'Santos FC',
  imageUrl: 'https://cdn.freecodecamp.org/curriculum/typescript/tsx-workshop/pele.jpg',
  pac: 97,
  sho: 98,
  pas: 83,
  dri: 99,
  def: 41,
  phy: 75
};
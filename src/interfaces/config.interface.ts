export interface IConfig {
  amount: string;
  category: string;
  difficultly: IDifficulty;
}

export enum IDifficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

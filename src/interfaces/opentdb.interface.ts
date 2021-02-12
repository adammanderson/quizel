import { IDifficulty } from './config.interface';

export interface OpenTDBParams {
  amount: number;
  category: number;
  difficulty: IDifficulty;
}

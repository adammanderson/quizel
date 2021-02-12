export interface IRound {
  roundId: number;
  response_code: string;
  complete: boolean;
  questions: IQuestion[];
}

export interface IQuestion {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

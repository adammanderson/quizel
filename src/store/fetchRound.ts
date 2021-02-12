import axios from 'axios';
import { IConfig } from '@interfaces';
import { startRound } from '@features/Rounds/roundsSlice';

export default function fetchRound(params: IConfig) {
  return function (dispatch): Promise<void> {
    return axios.get('https://opentdb.com/api.php?amount=10&category=22&difficulty=medium', { params }).then(({ data: { response_code, results } }) => {
      dispatch(
        startRound({
          response_code,
          questions: results,
        }),
      );
    });
  };
}

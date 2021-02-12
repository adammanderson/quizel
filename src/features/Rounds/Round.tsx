import { IRound } from '@interfaces';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import shuffle from '@utils/shuffle';
import { completeRound } from './roundsSlice';

interface RoundProps {
  round: IRound;
}

export default function Round({ round }: RoundProps): React.ReactElement {
  const { game, rounds } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Round {round.roundId}</h1>
      {round.questions.map(({ question, category, type, correct_answer, incorrect_answers }) => (
        <div>
          <h3 dangerouslySetInnerHTML={{ __html: question }} />
          <em>{`${category} ${type}`}</em>
          <ul>
            {shuffle([...incorrect_answers, correct_answer]).map((option) => (
              <li>{option}</li>
            ))}
          </ul>
        </div>
      ))}
      <button type="button" onClick={() => dispatch(completeRound(round.roundId))}>
        COMPLETE
      </button>
    </div>
  );
}

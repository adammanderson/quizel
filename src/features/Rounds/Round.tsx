import { IRound } from '@interfaces';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import shuffle from '@utils/shuffle';
import { completeRound } from './roundsSlice';
import Button from '@components/Button';

interface RoundProps {
  round: IRound;
}

export default function Round({ round }: RoundProps): React.ReactElement {
  const [index, setIndex] = React.useState<number>(0);
  const { question, category, type, correct_answer, incorrect_answers } = round.questions[index];
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto">
      <h1>
        Round {round.roundId} - {index + 1}/{round.questions.length}
      </h1>
      <div className="border rounded-md p-5 mb-6 text-center">
        <h3 className="font-bold text-lg" dangerouslySetInnerHTML={{ __html: question }} />
        <em className="text-sm not-italic">{`${category} ${type}`}</em>
        <ul className="mt-6 grid grid-cols-2 gap-3">
          {shuffle([...incorrect_answers, correct_answer]).map((option) => (
            <li className="border p-2 rounded-md">{option}</li>
          ))}
        </ul>
      </div>
      <Button type="button" onClick={() => setIndex(index + 1)}>
        Next
      </Button>
      <Button type="button" onClick={() => dispatch(completeRound(round.roundId))}>
        COMPLETE
      </Button>
    </div>
  );
}

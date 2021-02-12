import { IRound } from '@interfaces';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
      <button type="button" onClick={() => dispatch(completeRound(round.roundId))}>
        COMPLETE
      </button>
    </div>
  );
}

import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@store/index';

export default function Navigator(): React.ReactElement | null {
  const { game, rounds } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  if (!rounds.length) return null;

  return (
    <div>
      <dl>
        <dt>Round</dt>
        <dd>{`${game.activeRound}/${rounds.length}`}</dd>
        <dt>Question</dt>
        <dd>
          {game.activeQuestion}/{rounds[game.activeRound].questions.length}
        </dd>
      </dl>
    </div>
  );
}

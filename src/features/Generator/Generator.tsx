import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Categories from '@features/Categories/Categories';
import type { RootState } from '@store/index';
import fetchRound from '@store/fetchRound';
import { IConfig, IDifficulty } from '@interfaces';

export default function Generator(): React.ReactElement {
  const [config, setConfig] = React.useState<IConfig>({
    amount: '20',
    category: '0',
    difficulty: IDifficulty.MEDIUM,
  });
  const { game, rounds } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Round Generator</h1>
      <input type="number" defaultValue={config.amount} onChange={(event) => setConfig({ ...config, amount: event.target.value })} />
      <Categories onSelect={(category) => setConfig({ ...config, category })} />
      <button type="button" onClick={() => dispatch(fetchRound(config))}>
        START
      </button>
    </div>
  );
}

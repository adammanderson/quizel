import * as React from 'react';
import { useSelector } from 'react-redux';
import Layout from '@components/Layout';
import Generator from '@features/Generator/Generator';
import { RootState } from '@store/index';
import Round from '@features/Rounds/Round';

export default function Home(): React.ReactElement {
  const { rounds } = useSelector((state: RootState) => state);
  const latestRound = rounds.length && rounds.find(({ complete }) => !complete);

  return (
    <Layout>
      <h1 className="text-2xl">Quizel</h1>
      {latestRound ? <Round round={latestRound} /> : <Generator />}
    </Layout>
  );
}

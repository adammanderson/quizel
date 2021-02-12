import * as React from 'react';
import { IDifficulty } from '@interfaces';

interface DifficultyProps {
  onSelect: (id: string) => void;
}

export default function Difficulty({ onSelect }: DifficultyProps): React.ReactElement {
  return (
    <div>
      {Object.keys(IDifficulty).map((id) => (
        <button type="button" onClick={() => onSelect(id)}>
          {id}
        </button>
      ))}
    </div>
  );
}

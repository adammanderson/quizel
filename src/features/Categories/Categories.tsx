import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchCategories from '@store/fetchCategories';
import type { RootState } from '@store/index';

interface CategoriesProps {
  onSelect: (id: string) => void;
}

export default function Categories({ onSelect }: CategoriesProps): React.ReactElement {
  const categories = useSelector((state: RootState) => state.categories);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!categories.length) dispatch(fetchCategories());
  }, [categories, dispatch]);

  return (
    <div>
      <h1>Categories</h1>
      <button type="button" onClick={() => onSelect(0)}>
        RANDOM
      </button>
      {categories.map(({ id, name }) => (
        <button key={id} type="button" onClick={() => onSelect(id)}>
          {name}
        </button>
      ))}
    </div>
  );
}

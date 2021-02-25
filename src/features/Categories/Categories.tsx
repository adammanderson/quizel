import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchCategories from '@store/fetchCategories';
import type { RootState } from '@store/index';
import Button from '@components/Button';

interface CategoriesProps {
  onSelect: (id: string | number) => void;
}

export default function Categories({ onSelect }: CategoriesProps): React.ReactElement {
  const categories = useSelector((state: RootState) => state.categories);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!categories.length) dispatch(fetchCategories());
  }, [categories, dispatch]);

  return (
    <div className="container mx-auto flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6">Choose a category</h1>
      <div className="grid grid-cols-5 gap-4">
        <Button type="button" onClick={() => onSelect(0)}>
          RANDOM
        </Button>
        {categories.map(({ id, name }) => (
          <Button key={id} type="button" onClick={() => onSelect(id)}>
            {name}
          </Button>
        ))}
      </div>
    </div>
  );
}

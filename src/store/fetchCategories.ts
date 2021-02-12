import axios from 'axios';
import { addCategories } from '@features/Categories/categoriesSlice';

export default function fetchCategories() {
  return function (dispatch): Promise<void> {
    return axios
      .get('https://opentdb.com/api_category.php')
      .then(({ data: { trivia_categories } }) => {
        console.log(trivia_categories);
        dispatch(addCategories(trivia_categories));
      });
  };
}

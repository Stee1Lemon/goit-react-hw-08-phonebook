import { useDispatch } from 'react-redux';
import { handleFilterRedux } from 'redux/filter/filter-slice';
import { FilterInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(handleFilterRedux(e.target.value));
  };

  return (
    <label>
      <p>Filter contacts by name</p>
      <FilterInput type="text" name="filter" onChange={handleFilter} />
    </label>
  );
};

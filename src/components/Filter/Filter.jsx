import { useDispatch } from 'react-redux';
import { handleFilterRedux } from 'redux/filter/filter-slice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(handleFilterRedux(e.target.value));
  };

  return (
    <label>
      <p>Find contacts by name</p>
      <input type="text" name="filter" onChange={handleFilter} />
    </label>
  );
};

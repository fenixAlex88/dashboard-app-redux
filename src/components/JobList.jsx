import { useDispatch, useSelector } from 'react-redux';
import { JobPosition } from './JobPosition';
import { selectVisiblePositions } from 'store/positions/position-selectors';
import { addFiltre } from 'store/filters/filter-actions';
import { selectFilters } from 'store/filters/filter-selectors';


const JobList = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters)
  const data = useSelector((state) => selectVisiblePositions(state, filters));

  const handleAddFilter = (filter) => {
    dispatch(addFiltre(filter))
  }

  return (
    <div className='job-list'>
      {data.map(item => (
        <JobPosition key={item.id} handleAddFilter={handleAddFilter} {...item} />
      ))}
    </div>
  )
}

export { JobList };
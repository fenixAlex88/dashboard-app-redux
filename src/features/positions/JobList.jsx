import { useDispatch } from 'react-redux';
import { JobPosition } from './JobPosition';
import { addFiltre } from 'features/filter/filter-slice';
import { usePositions } from './use-positions';
import { useFetchPositions } from './use-fetch-position';


const JobList = () => {
  useFetchPositions();
  const data = usePositions();
  const dispatch = useDispatch();

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
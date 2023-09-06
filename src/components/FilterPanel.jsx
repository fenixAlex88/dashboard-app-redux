import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { clearFiltre, removeFiltre as removeFilter } from 'store/filters/filter-actions';
import { selectFilters } from 'store/filters/filter-selectors';


const FilterPanel = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  if (!filters.length) return null;
  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {filters.map(filter => (
            <Badge key={filter} onClear={() => { dispatch(removeFilter(filter)) }} variant="clearable">{filter}</Badge>
          ))}
        </Stack>

        <button onClick={() => dispatch(clearFiltre)} className='link'>Clear</button>
      </div>
    </Card>
  )
}

export { FilterPanel };
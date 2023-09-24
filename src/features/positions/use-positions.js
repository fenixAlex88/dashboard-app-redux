import { useSelector } from "react-redux";
import { selectVisiblePositions } from "./position-slice";

import { selectFilters } from "features/filter/filter-slice";


export const  usePositions = () => {
  const filters = useSelector(selectFilters);
  const positions = useSelector((state) => selectVisiblePositions(state, filters));
  return positions;
}
import React from 'react';
import cx from 'classnames';
import { VISIBILITY_FILTERS } from '../constants';
import '../index.css';

const VisibilityFilters = ({ activeFilter }) => {
  return (
    <div className="visibility-filters">
      { Object.keys(VISIBILITY_FILTERS).map(filterKey => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            className={cx(
              "filter",
               currentFilter === activeFilter && "filter--active"
            )}
            onClick={() => {} /** waiting fore setFilter handler */}
          >
            {currentFilter} 
          </span>
        )
      })} 
    </div>
  )
}

export default VisibilityFilters;
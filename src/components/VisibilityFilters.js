import React from 'react';
import cx from 'classnames';
import { VISIBILITY_FILTERS } from '../constants';
import '../index.css';

// This component renders a simple set of filters: all, completed, and imcomplete. Clicking in each one them will filter the list of todos.

const VisibilityFilters = ({ activeFilter }) => { // it acceps this prop from the parent that indicates which filter is currently seletected by the user. An Active filter is rendered with an underscore
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
            onClick={() => {} /** waiting fore setFilter handler */} // It dispatches the setFilter action to update the selected filter
          >
            {currentFilter} 
          </span>
        )
      })} 
    </div>
  )
}

export default VisibilityFilters;
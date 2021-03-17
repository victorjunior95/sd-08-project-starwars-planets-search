import React from 'react';

class Filters extends React.Component {
  constructor() {
    super();

    this.state = {
      filters: {
        filterByName: {
          name,
        },
      },
    };
  }

  setFilters(filter, value) {
    const { filters } = this.state;
    this.setState({
      ...filters,
      filters: { [filter]: { value } },
    });
  }
}

export default Filters;

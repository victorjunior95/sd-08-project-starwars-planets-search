import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchAPI } from '../services/fetchAPI';
import StarWarsContext from './StarWarsContext';

export default class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['Hello Context Api'],
      fetching: true,
      filters: {
        filterByName: { name: '' },
        filterByNumericValues: [{ column: '', comparison: '', value: 0 }],
      },
    };
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const arr = [];
    const planets = fetchAPI();
    await planets.then((response) => response.json())
      .then((result) => arr.push(result.results));
    this.setState({ data: arr[0], fetching: false });
  }

  searchQuery(query) {
    const { filters: { filterByNumericValues } } = this.state;
    this.setState({ filters: { filterByName: { name: query }, filterByNumericValues } });
  }

  filterQueries(col = '', comp = '', val = '') {
    const { filters: { filterByName } } = this.state;

    this.setState({
      filters: {
        filterByName,
        filterByNumericValues:
          [{ column: col, comparison: comp, value: val }] },
    });
  }

  render() {
    const context = {
      ...this.state,
      getData: () => this.getData(),
      searchQuery: (query) => this.searchQuery(query),
      filterQueries: (col, comp, val) => this.filterQueries(col, comp, val),
    };

    const { children } = this.props;

    return (
      <StarWarsContext.Provider value={ context }>{children}</StarWarsContext.Provider>
    );
  }
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

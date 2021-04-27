import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchAPI } from '../services/fetchAPI';
import StarWarsContext from './StarWarsContext';
import testData from '../testData';

export default class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: testData.results,
      fetching: false,
      filteredData: testData.results,
      filters: {
        filterByName: { name: '' },
        filterByNumericValues: [{ column: '', comparison: '', value: 0 }],
        col: '',
        comp: '',
        val: 0,
      },
    };
  }

  componentDidMount() {
    this.getData();
  }

  handleInputs(e, col = '', comp = '', val = '') {
    e.preventDefault();
    console.log('entrou no handleInputs');
    const {
      filters: { filterByName, filterByNumericValues },
    } = this.state;

    this.setState((state) => ({
      ...state,
      filters: {
        filterByName,
        filterByNumericValues,
        col,
        comp,
        val,
      },
    }));
  }

  async getData() {
    const arr = [];
    const planets = fetchAPI();
    await planets
      .then((response) => response.json())
      .then((result) => arr.push(result.results));
    this.setState({ data: arr[0], fetching: false });
  }

  filterByQuery(query) {
    const {
      filters: { filterByNumericValues, col, comp, val },
    } = this.state;
    this.setState((state) => ({
      ...state,
      filters: { filterByName: { name: query }, filterByNumericValues, col, comp, val },
    }));
  }

  filterByNumerics(e, col = '', comp = '', val = '') {
    e.preventDefault();
    const {
      filters: { filterByName, filterByNumericValues },
    } = this.state;

    this.setState((state) => ({
      ...state,
      filters: {
        filterByName,
        filterByNumericValues: [
          ...filterByNumericValues, { column: col, comparison: comp, value: val }],
        column: '',
        comparison: '',
        value: 0,
      },
    }));
  }

  filterData(filteredData) {
    this.setState((state) => ({
      ...state,
      filteredData,
    }));
  }

  render() {
    const context = {
      ...this.state,
      getData: () => this.getData(),
      handleInputs: (e, col, comp, val) => this.handleInputs(e, col, comp, val),
      filterByQuery: (query) => this.filterByQuery(query),
      filterByNumerics:
        (e, col, comp, val) => this.filterByNumerics(e, col, comp, val),
      filterData: (filteredData) => this.filterData(filteredData),
    };

    const { children } = this.props;

    return (
      <StarWarsContext.Provider value={ context }>
        {children}
      </StarWarsContext.Provider>
    );
  }
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

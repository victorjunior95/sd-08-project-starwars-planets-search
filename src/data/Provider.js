import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchAPI } from '../services/fetchAPI';
import { firstSelector, secondSelector } from '../constants/index';
import StarWarsContext from './StarWarsContext';
import testData from '../testData';

export default class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      fetching: true,
      filteredData: testData.results,
      columnSelector: firstSelector,
      secondSelector,
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

  filterByNumerics(filterData, col = '', comp = '', val = '') {
    const {
      filters: { filterByName, filterByNumericValues },
    } = this.state;

    this.setState((state) => ({
      ...state,
      filterData,
      filters: {
        filterByName,
        filterByNumericValues: [
          ...filterByNumericValues, { column: col, comparison: comp, value: val }],
        column: '',
        comparison: '',
        value: 0,
      },
    }));

    this.filterColumn(col);
  }

  filterColumn(col) {
    const { columnSelector } = this.state;
    console.log('entrou no filterColumn, columnSelector: ', columnSelector);
    console.log('spread operator: ', [
      // ...firstSelector,
      ...columnSelector.slice(0, columnSelector.indexOf(col) - 1),
      ...columnSelector.slice(columnSelector.indexOf(col), columnSelector.length - 1),
    ]);
    this.setState((state) => ({
      ...state,
      // filteredData,
      columnSelector: [
        // ...firstSelector,
        ...columnSelector.slice(0, columnSelector.indexOf(col)),
        ...columnSelector.slice(columnSelector.indexOf(col) + 1),
      ],
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

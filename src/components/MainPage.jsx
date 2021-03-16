import React, { Component } from 'react';
import PlanetContext from '../contexts/PlanetContext';
import { getPlanetsList } from '../services/PlanetsAPI';
import FilterForm from './FilterForm';
import Table from './Table';

class MainPage extends Component {
  constructor() {
    super();

    this.fetchPlanetsList = this.fetchPlanetsList.bind(this);
  }

  componentDidMount() {
    this.fetchPlanetsList();
  }

  async fetchPlanetsList() {
    const { setPlanetsList } = this.context;
    const planetsFromAPI = await getPlanetsList();
    setPlanetsList(planetsFromAPI);
  }

  render() {
    return (
      <div>
        <span>Hello, App!</span>
        <FilterForm />
        <Table />
      </div>
    );
  }
}

MainPage.contextType = PlanetContext;

export default MainPage;

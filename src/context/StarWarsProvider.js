import React from "react";
import StarWarsContext from "./StarWarsContext";
import planetsApi from "../services/planetsApi";

class StarWarsProvider extends React.Component {
  constructor() {
    super();

    this.state = {
      isFetching: false,
      error: null,
      arrayOfResults: [],
    };

    this.fetchPlanetsApi = this.fetchPlanetsApi.bind(this);
  }

  fetchPlanetsApi() {
    this.setState({ isFetching: true }, async () => {
      const { results } = await planetsApi();
      this.setState({
        arrayOfResults: results,
        isFetching: false,
      });
    });
  }

  render() {
    const { children } = this.props;
    return (
      <StarWarsContext.Provider
        value={ { ...this.state, fetchPlanetsApi: this.fetchPlanetsApi } }
      >
        {children}
      </StarWarsContext.Provider>
    );
  }
}

export default StarWarsProvider;
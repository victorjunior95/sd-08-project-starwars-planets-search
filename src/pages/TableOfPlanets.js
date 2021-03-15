import React from 'react';
import StarWarsContext from '../context/StarWarsContext';


class TableOfPlanets extends React.Component {

    componentDidMount() {
        const { fetchPlanetsApi } = this.context;
        fetchPlanetsApi();
    }

    render() {
        const { isFetching, arrayOfResults } = this.context;
        return arrayOfResults.length > 0 && !isFetching ? (
        <div>{arrayOfResults[0].name}</div>
        ) : <span>Carregando...</span> 
    }
}

TableOfPlanets.contextType = StarWarsContext;

export default TableOfPlanets;
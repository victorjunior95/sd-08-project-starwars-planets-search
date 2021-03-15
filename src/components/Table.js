import React, { Component } from 'react';
import Header from './Header';
// eslint-disable-next-line import/no-unresolved
// import MyContext from '../context';
// import Filters from './Filters';
// import Body from './Body';
// import getData from '../services/data';

export default class Table extends Component {
  render() {
    return (
      <div>
        {/* // <MyContext.Consumer> */}
        <h1>StarWars DataTable Hooks</h1>
        {/* <Filters /> */}
        <table>
          <Header />
          {/* <Body /> */}
        </table>
        {/* // </MyContext.Consumer> */}
      </div>
    );
  }
}

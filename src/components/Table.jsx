import React, { useContext } from 'react';
import Context from '../context/Context';
import TableData from './TableData';

export default function Table() {
  const { data } = useContext(Context);

  const columns = [
    {
      Header: 'climate',
      accessor: 'climate',
    },
    {
      Header: 'created',
      accessor: 'created',
    },
    {
      Header: 'diameter',
      accessor: 'diameter',
    },
    {
      Header: 'edited',
      accessor: 'edited',
    },
    {
      Header: 'films',
      accessor: 'films',
    },
    {
      Header: 'gravity',
      accessor: 'gravity',
    },
    {
      Header: 'name',
      accessor: 'name',
    },
    {
      Header: 'orbital_period',
      accessor: 'orbital_period',
    },
    {
      Header: 'population',
      accessor: 'population',
    },
    {
      Header: 'rotation_period',
      accessor: 'rotation_period',
    },
    {
      Header: 'surface_water',
      accessor: 'surface_water',
    },
    {
      Header: 'terrain',
      accessor: 'terrain',
    },
    {
      Header: 'url',
      accessor: 'url',
    },
  ];

  return (<TableData columns={ columns } data={ data } />);
}

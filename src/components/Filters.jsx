import React, { useContext, useEffect } from 'react';
import { Form, FormControl } from 'react-bootstrap';
import tableContext from '../context/tableContext';
import filtering from '../utils/filtering';

export default function Filters() {
  const { filters,
    setFilters,
    data,
    setFilteredData } = useContext(tableContext);

  const handleInput = ({ target }) => {
    const { name, value } = target;
    setFilters({ [name]: { name: value } });
  };

  useEffect(() => {
    filtering(data, filters, setFilteredData);
  }, [filters]);

  return (
    <section className="filters">
      <Form inline>
        <FormControl
          name="filterByName"
          size="lg"
          type="text"
          placeholder="Nome do Planeta"
          className="mr-sm-2"
          data-testid="name-filter"
          onChange={ (event) => handleInput(event) }
        />
      </Form>
    </section>
  );
}

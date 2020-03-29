import React from 'react';
import Datatable from './DataTable';

const Datasets = props => {

  const compare = param => (a, b) => !a.hasOwnProperty(param) || !b.hasOwnProperty(param) ? 0 : (a[param].toUpperCase() > b[param].toUpperCase()) ? -1 : 1;

  return (
    <Datatable
      covid19Data={props.covid19Data}
      covid19Location={props.covid19Location}
      compare={compare}
    />
  );
}

export default Datasets;
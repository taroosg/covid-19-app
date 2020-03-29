import React from 'react';
import DataTable from './DataTable';
import DataGraph from './DataGraph';

const DataSets = props => {

  const compare = param => (a, b) => !a.hasOwnProperty(param) || !b.hasOwnProperty(param) ? 0 : (a[param].toUpperCase() > b[param].toUpperCase()) ? -1 : 1;

  return (
    <div>
      <DataGraph
        covid19Data={props.covid19Data}
        covid19Location={props.covid19Location}
        compare={compare}
      />
      <DataTable
        covid19Data={props.covid19Data}
        covid19Location={props.covid19Location}
        compare={compare}
      />
    </div>
  );
}

export default DataSets;
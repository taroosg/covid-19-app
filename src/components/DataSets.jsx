import React, { useState } from 'react';
import DataRadio from './DataRadio';
import DataTable from './DataTable';
import DataGraph from './DataGraph';

const DataSets = props => {

  const [dataType, setDataType] = useState('new_cases');

  const compare = param => (a, b) => !a.hasOwnProperty(param) || !b.hasOwnProperty(param) ? 0 : (a[param].toUpperCase() > b[param].toUpperCase()) ? -1 : 1;

  return (
    <div>
      <DataRadio
        setDataType={setDataType}
      />
      <DataGraph
        covid19Data={props.covid19Data}
        covid19Location={props.covid19Location}
        compare={compare}
        dataType={dataType}
      />
      <DataTable
        covid19Data={props.covid19Data}
        covid19Location={props.covid19Location}
        dataType={dataType}
        compare={compare}
      />
    </div>
  );
}

export default DataSets;
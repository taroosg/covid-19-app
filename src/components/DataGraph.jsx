import React, { useState } from 'react';
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, ReferenceLine, ReferenceArea,
  ReferenceDot, Tooltip, CartesianGrid, Legend, Brush, ErrorBar, AreaChart, Area,
  Label, LabelList
} from 'recharts';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

// import { scalePow, scaleLog } from 'd3-scale';
// import CustomLineDot from './CustomLineDot';

const DataGraph = props => {

  const [dataType, setDataType] = useState('new_cases');

  const data = props.covid19Data
    .filter(x => x.location === props.covid19Location)
    .sort(props.compare('date'))
    .reverse();

  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend"></FormLabel>
        <RadioGroup
          row
          aria-label="position"
          name="position"
          defaultValue="new_cases"
          onChange={e => setDataType(e.target.value)}
        >
          <FormControlLabel
            value="new_cases"
            control={<Radio color="primary" />}
            label="new_cases"
            labelPlacement="Top"
          />
          <FormControlLabel
            value="new_deaths"
            control={<Radio color="primary" />}
            label="new_deaths"
            labelPlacement="top"
          />
          <FormControlLabel
            value="total_cases"
            control={<Radio color="primary" />}
            label="total_cases"
            labelPlacement="top"
          />
          <FormControlLabel
            value="total_deaths"
            control={<Radio color="primary" />}
            label="total_deaths"
            labelPlacement="top"
          />
        </RadioGroup>
      </FormControl>
      <div style={{ height: "400px" }}>
        <ResponsiveContainer>
          <LineChart
            // width={500}
            height={400}
            data={data}
            margin={{ top: 10, right: 0, left: 0, bottom: 10 }}
          >
            <XAxis
              domain={['dataMin', 'dataMax']}
              dataKey="date"
              interval={Math.ceil(data.length / 3)}
            />
            <YAxis
              domain={['dataMin', 'dataMax']}
              dataKey={dataType}
            />
            <Tooltip
              wrapperStyle={{
                borderColor: 'white',
                boxShadow: '2px 2px 3px 0px rgb(204, 204, 204)',
              }}
              contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
              labelStyle={{ fontWeight: 'bold', color: '#666666' }}
            />
            <CartesianGrid stroke="#f5f5f5" />
            <Line
              // type="monotone"
              dataKey={dataType}
              stroke="#ff7300"
              strokeWidth={3}
              yAxisId={0}
            />
            {/* <Line type="monotone" dataKey="new_deaths" stroke="#387908" yAxisId={1} /> */}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
};

export default DataGraph;
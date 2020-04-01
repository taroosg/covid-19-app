import React from 'react';
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, ReferenceLine, ReferenceArea,
  ReferenceDot, Tooltip, CartesianGrid, Legend, Brush, ErrorBar, AreaChart, Area,
  Label, LabelList
} from 'recharts';

const DataGraph = props => {

  const data = props.covid19Data
    .filter(x => x.location === props.covid19Location)
    .sort(props.compare('date'))
    .reverse();

  return (
    <div style={{ height: "400px", width: "95vw", maxWidth: "800px", margin: "0 auto" }}>
      <ResponsiveContainer>
        <LineChart
          // width={500}
          height={400}
          data={data}
          margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
        >
          <XAxis
            domain={['dataMin', 'dataMax']}
            dataKey="date"
            interval={Math.floor(data.length / 7)}
          />
          <YAxis
            domain={['dataMin', 'dataMax']}
            dataKey={props.dataType}
          />
          <Tooltip
            wrapperStyle={{
              borderColor: 'white',
            }}
            contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
            labelStyle={{ fontWeight: 'bold', color: '#f2f2f2' }}
          />
          <CartesianGrid stroke="#f5f5f5" />
          <Line
            dataKey={props.dataType}
            stroke="#ff7300"
            strokeWidth={3}
            yAxisId={0}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
};

export default DataGraph;
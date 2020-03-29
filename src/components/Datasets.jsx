import React from 'react';

const Datasets = props => {
  return (
    <table>
      {/* <p>{props?.covid19Location ?? ''}</p> */}
      <thead>
        <tr>
          <th>Date</th>
          <th>Location</th>
          <th>new_cases</th>
          <th>new_deaths</th>
          <th>total_cases</th>
          <th>total_deaths</th>
        </tr>
      </thead>
      <tbody>
        {
          props.covid19Data.data
            .filter(x => x.location === props.covid19Location)
            .map((x, index) =>
              <tr key={index}>
                <td>{x.date}</td>
                <td>{x.location}</td>
                <td>{x.new_cases}</td>
                <td>{x.new_deaths}</td>
                <td>{x.total_cases}</td>
                <td>{x.total_deaths}</td>
              </tr>
            )
        }
      </tbody>
    </table>
  );
}
export default Datasets;
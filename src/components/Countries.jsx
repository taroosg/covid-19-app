import React from 'react';

const Countries = props => {

  return (
    !props.covid19Data
      ? ''
      : <select
        onChange={e => props.setCovid19Location(e.target.value)}
        defaultValue={'World'}
      >
        {
          props.covid19Data?.data
            ?.map?.(x => x.location)
            ?.filter((x, index, self) => self.indexOf(x) === index)
            ?.map?.((x, index) =>
              <option key={index} value={x} >{x}</option>
            )
        }
      </select>
  );
}
export default Countries;
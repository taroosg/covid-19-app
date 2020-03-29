import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const Countries = props => {

  return (
    !props.covid19Data
      ? ''
      : <FormControl variant="outlined">
        <InputLabel >Country</InputLabel>
        <Select
          defaultValue={'Japan'}
          onChange={e => props.setCovid19Location(e.target.value)}
          label="Country"
        >
          {
            props.covid19Data
              .map(x => x.location)
              .filter((x, index, self) => self.indexOf(x) === index)
              .map((x, index) =>
                <MenuItem key={index} value={x}>{x}</MenuItem>
              )
          }
        </Select>
      </FormControl>
  );
}
export default Countries;
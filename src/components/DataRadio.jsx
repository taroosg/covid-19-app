import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const DataRadio = props => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend"></FormLabel>
      <RadioGroup
        row
        aria-label="position"
        name="position"
        defaultValue="new_cases"
        onChange={e => props.setDataType(e.target.value)}
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
  )
}

export default DataRadio;
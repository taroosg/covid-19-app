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
        aria-label="dataType"
        name="dataType"
        defaultValue="new_cases"
        onChange={e => props.setDataType(e.target.value)}
      >
        {
          Object.keys(props.covid19Data[0]).map((x, index) => {
            return x.match(/date|location/)
              ? false
              :
              <FormControlLabel
                key={index}
                value={x}
                control={<Radio color="primary" />}
                label={x}
                labelPlacement="top"
              />
          })
        }
      </RadioGroup>
    </FormControl>
  )
}

export default DataRadio;
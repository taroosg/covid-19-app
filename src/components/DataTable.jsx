import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const Datatable = props => {
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Date</TableCell>
            <TableCell align="right">{props.dataType}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            props.covid19Data
              .filter(x => x.location === props.covid19Location)
              .sort(props.compare('date'))
              .map((x, index) =>
                <TableRow key={index}>
                  <TableCell align="left" component="th" scope="row">{x.date}</TableCell>
                  <TableCell align="right">{x[props.dataType]}</TableCell>
                </TableRow>
              )
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Datatable;
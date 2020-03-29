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
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">new_cases</TableCell>
            <TableCell align="right">new_deaths</TableCell>
            <TableCell align="right">total_cases</TableCell>
            <TableCell align="right">total_deaths</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            props.covid19Data
              .filter(x => x.location === props.covid19Location)
              .sort(props.compare('date'))
              .map((x, index) =>
                <TableRow key={index}>
                  <TableCell align="right" component="th" scope="row">{x.date}</TableCell>
                  {/* <td>{x.location}</td> */}
                  <TableCell align="right">{x.new_cases}</TableCell>
                  <TableCell align="right">{x.new_deaths}</TableCell>
                  <TableCell align="right">{x.total_cases}</TableCell>
                  <TableCell align="right">{x.total_deaths}</TableCell>
                </TableRow>
              )
          }
        </TableBody>
      </Table>
    </TableContainer>
    // <table>
    //   <thead>
    //     <tr>
    //       <th>Date</th>
    //       {/* <th>Location</th> */}
    //       <th>new_cases</th>
    //       <th>new_deaths</th>
    //       <th>total_cases</th>
    //       <th>total_deaths</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {
    //       props.covid19Data
    //         .filter(x => x.location === props.covid19Location)
    //         .sort(props.compare('date'))
    //         .map((x, index) =>
    //           <tr key={index}>
    //             <td>{x.date}</td>
    //             {/* <td>{x.location}</td> */}
    //             <td>{x.new_cases}</td>
    //             <td>{x.new_deaths}</td>
    //             <td>{x.total_cases}</td>
    //             <td>{x.total_deaths}</td>
    //           </tr>
    //         )
    //     }
    //   </tbody>
    // </table>
  );
}

export default Datatable;
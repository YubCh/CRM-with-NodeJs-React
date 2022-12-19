import React from 'react';
import { Table,TableContainer,TableHead, TableBody, TableRow, TableCell, Paper, getTableHeadUtilityClass} from '@mui/material';


const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': 'Max',
  'birthday': '1',
  'gender': 'Male',
  'job': 'Student'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': 'Emma',
  'birthday': '2',
  'gender': 'Female',
  'job': 'Student'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': 'Van',
  'birthday': '3',
  'gender': 'Female',
  'job': 'Student'
},
{
  'id': 4,
  'image': 'https://placeimg.com/64/64/4',
  'name': 'Grief',
  'birthday': '4',
  'gender': 'Male',
  'job': 'Student'
},
]


export const MuiTable = () => {
  return(
    <TableContainer component={Paper}>
      <Table aria-label='simpel table'>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Birthday</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Job</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map(row => (
            <TableRow 
              key = {row.id}
              sx = {{'a':{border:0}}}
           >
            <TableCell>{row.id}</TableCell>
            <TableCell>{row.image}</TableCell>
            <TableCell>{row.birthday}</TableCell>
            <TableCell>{row.gender}</TableCell>
            <TableCell>{row.job}</TableCell> 
           </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}


class Customer extends React.Component{
  redner(){
    return(
      <div>
      <TableRow>
        <TableCell>{this.props.id}</TableCell>
        <TableCell><img src={this.props.image} alt='profile'/></TableCell>
        <TableCell>{this.props.name}</TableCell>
        <TableCell>{this.props.birthday}</TableCell>
        <TableCell>{this.props.gender}</TableCell>
        <TableCell>{this.props.job}</TableCell>
      </TableRow>
      </div>
    )
  }
}
export default Customer; 

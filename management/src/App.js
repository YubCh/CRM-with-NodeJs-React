import React, {Component} from 'react';
import './App.css';
import Customer from './components/Customer';


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


function App() {
  return (
    <div>
      {
        customers.map(each => {
          return(
            <Customer
            key={each.id}
            id={each.id}
            image={each.image}
            name={each.name}
            birthday={each.birthday}
            gender={each.gender}
            job={each.job}
            />
          )
        })
      }
    </div>
  );
}

export default App;



import './App.css';

import React from 'react';
import Card from './COMPONENTS/Card';

function App() {
  const users = [
    {
      id: 1,
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      name: 'John Doe',
      designation: 'Software Engineer',
      jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      name: 'Jane Smith',
      designation: 'Product Manager',
      jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 3,
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
      name: 'Bob Johnson',
      designation: 'Marketing Specialist',
      jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  return (
    <div>
      {users.map((user) => (
        <Card
          key={user.id}
          image={user.image}
          name={user.name}
          designation={user.designation}
          jobDescription={user.jobDescription}
        />
      ))}
      
    </div>
  );
};

export default App;
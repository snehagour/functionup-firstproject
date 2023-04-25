

import './App.css';

import React from 'react';
import Card from './COMPONENTS/Card';

function App() {
  const users = [
    {
      id: 145656,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtfPFPvb7mNss-QoBYqxNrcUasOiNYScfARL9ku_YsVg&s',
      name: 'shoes',
      brand : " zixer",
      price:"Rs.500",
      Description: 'The open laced quarters are full grain .',
      Rating : "****"
    },
    {
      id: 27878787,
      image: 'https://m.media-amazon.com/images/I/71kFiNVGpgL._UL1500_.jpg',
      name: 'watch',
      brand : "fossil ",
      price:"Rs.400",
      Description: ' Instant Discount up to INR 300 on OneCard Credit. ',
      Rating: "****"
    },
    {
      id: 6767673,
      image: 'https://i.pinimg.com/736x/b9/1a/8d/b91a8d1da40f62222923ff70df18fb6a.jpg',
      name: 'top',
      brand : "floral print top ",
      price:"Rs.300",
      Description: 'Beautiful Fancy Tops Designs Images For Girls',
      Rating:"*****"
    },
    {
      id: 486767,
      image: 'https://5.imimg.com/data5/SV/HC/BW/SELLER-88116927/baby-girl-puffy-dress-500x500.jpg',
      name: 'baby dress',
      brand : " anneca",
      price:"Rs.700",
      Description: 'Net Party Wear Baby Girl Puffy Dress.',
      Rating:"****"
    },
    {
      id: "Rs.900",
      image: 'https://media.istockphoto.com/id/1208562547/photo/the-boy-plays-with-girl-toys-and-dolls.jpg?s=612x612&w=0&k=20&c=5J3tywMXtB9fUqYaY13Xf4RksnMKOr8aeJxnJfCPe2o=',
      name: 'toys',
      brand : "aaxier ",
      price:500,
      Description: 'The boy plays with girl toys and dolls stock photo.',
      Rating:"****"
    },
  ];

  return (
    <div>
      {users.map((user) => (
        <Card
          id={user.id}
          image={user.image}
          name={user.name}
          brand={user.brand}
          price={user.price}
          Rating={user.Rating}
          Description={user.Description}
        />
      ))}
      
    </div>
  );
};

export default App;

import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className="card-container">
        <div className='container'>
      <img src={props.image} alt="profile" className="profile-image" />
      <h2 className="name">{props.name}</h2>
      <p className="brand">{props.brand}</p>
      <p className="id">{props.id}</p>

      <p className="price">{props.price}</p>
      <p className="rating">{props.Rating}</p>
      <h3 className="description">{props. Description}</h3>

      <button className="see-more" onClick={() => alert(props.name)}>ADD TO CARD</button>
      </div>
    </div>
    
  );
}

export default Card;

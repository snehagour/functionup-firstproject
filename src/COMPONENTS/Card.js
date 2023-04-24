
import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className="card-container">
        <div className='container'>
      <img src={props.image} alt="profile" className="profile-image" />
      <h2 className="name">{props.name}</h2>
      <h3 className="designation">{props.designation}</h3>
      <p className="job-description">{props.jobDescription}</p>
      <button className="see-more" onClick={() => alert(props.name)}>See More</button>
      </div>
    </div>
  );
}

export default Card;

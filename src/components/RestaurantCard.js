import React from 'react';


const styleCard = {
  backgroundColor: '#f0f0f0',
}
const RestaurantCard = (props) => {
  return (
    <div className='res-card' style={styleCard}>
      <img className='res-logo' src="https://b.zmtcdn.com/data/pictures/chains/1/50691/9f5024f289d3ea5c80fa3259972a2371.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*" alt="res-logo" />
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>{props.rating}</h4>
      <h4>{props.eta}</h4>
    </div>
  );
}

export default RestaurantCard;

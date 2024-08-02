import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';

const styleCard = {
  backgroundColor: '#f0f0f0',
}
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
  return (
    <div className='res-card' style={styleCard}>
      <img className='res-logo' src={IMG_CDN_URL + cloudinaryImageId} alt="res-logo" />
      <h2>{name}</h2>
      <h5>{cuisines.join(", ")}</h5>
      <h6>{area}</h6>
      <h4>{avgRating}</h4>
      <h4>{lastMileTravelString}</h4>
      <h4>{costForTwoString}</h4>
    </div>
  );
}

export default RestaurantCard;

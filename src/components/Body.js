import React from 'react';
import { useState } from 'react';
import RestaurantCard from "./RestaurantCard";
const Body = () => {
  const { listOfRestaurants, setListOfRestaurants } = useState([]);
  return (
    <div className='body'>
      <div className='filter'>
        <button className='filter-btn' onClick={() => {
          const filteredList = listOfRestaurants.filter((res) => res.data.avgRating > 4);
          setListOfRestaurants(filteredList);
        }}> Top Rated Restaurants</button>
      </div>
      <div className='res-container'>
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default Body;
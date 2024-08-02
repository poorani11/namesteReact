import React from 'react';
import { useState, useEffect } from 'react';
import RestaurantCard from "./RestaurantCard";
import Shimmer from './Shimmer';
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.448382&lng=78.3993532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  return listOfRestaurants == 0 ? <Shimmer /> : (
    <div className='body'>
      <div className='filter'>
        <div className='search'>
          <input type="text" className='search-box' value={searchText} onChange={(e) => {
            setSearchText(e.target.value);
          }} />
          <button onClick={() => {
            let filteredRestaurants = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRestaurants(filteredRestaurants);
          }}> Search </button>
        </div>
        <button className='filter-btn' onClick={() => {
          const filteredList = listOfRestaurants.filter((res) => res.data.avgRating > 4);
          setFilteredRestaurants(filteredList);
        }}> Top Rated Restaurants</button>
      </div>
      <div className='res-container'>
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
          )
        }

        )}
      </div>
    </div>
  );
}

export default Body;
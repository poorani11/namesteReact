import React from 'react';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.448382&lng=78.3993532&restaurantId=300353&catalog_qa=undefined&submitAction=ENTER");
    const json = await data.json();
    setResInfo(json.data?.cards[2]?.card?.card?.info);


  }

  return resInfo === null ? (<Shimmer />) : (
    <div>
      <h1>{resInfo.name}</h1>
      <h3>{resInfo.cuisines.join(", ")}</h3>
      <h3>{resInfo.costForTwoMessage
      }</h3>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  )
}

export default RestaurantMenu;

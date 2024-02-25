import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { SWIGGY_API_URL } from "../utils/Constants";
import Shimmer from "./Shimmer";

const filterStyle  = {"margin": "10px"};

const Body = ()=>
{
    const [restaurantList, setrestaurantList] = useState([]);

    useEffect(
      ()=>{ 
        fetchRestaurantsList();
      }, []
    );

    const fetchRestaurantsList = async ()=>
    {
      const response = await fetch(SWIGGY_API_URL);
      const json_data = await response.json();
      console.log(json_data);
      setrestaurantList(json_data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    // Conditional rendering - Rendering in the form of condition
    if(restaurantList.length===0)
    {
      return <Shimmer />;
    }

    return (<div className="bodyContainer">
        <div className="res-filter" style={filterStyle}><button onClick={()=>{
          const filteredList = restaurantList.filter(
                               (res)=>res.info.avgRating>=4.3);
          setrestaurantList(filteredList);
        }
        }>Top Rated Restaurants</button></div>
        <div className="restoContainer">
          { 
             restaurantList.map(restaurant=><RestaurantCard key={restaurant.info.id} restObj={restaurant} />)
          }
        </div>
    </div>);
}

export default Body;
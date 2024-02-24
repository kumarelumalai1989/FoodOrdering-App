import RestaurantCard from "./RestaurantCard";
import {restList} from "../utils/mockData"
import { useState } from "react";

const restoContainerStyle = {"display":"flex", "flex-wrap":"wrap"}
const filterStyle  = {"margin": "10px"};

const Body = ()=>
{
    console.log(restList);
    const [restaurantList, setrestaurantList] = useState(restList);
    return (<div className="bodyContainer">
        <div className="res-filter" style={filterStyle}><button onClick={()=>{
          const filteredList = restaurantList.filter(
                               (res)=>res.info.avgRating>=4.3);
          setrestaurantList(filteredList);
        }
        }>Top Rated Restaurants</button></div>
        <div className="restoContainer" style={restoContainerStyle}>
          { 
             restaurantList.map(restaurant=><RestaurantCard key={restaurant.info.id} restObj={restaurant} />)
          }
        </div>
    </div>);
}

export default Body;
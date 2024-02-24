import {CDN_URL} from '../utils/Constants';

const RestaurantCard = (props)=>
{
    const {restObj} = props;
    console.log("props");
    const {
        name,
        cuisines,
        avgRating,
        cloudinaryImageId
    } = restObj?.info;

    const {deliveryTime} = restObj?.info?.sla;

    const imgStyle = {width:"200px"}

    return(
        <div className="restarunt">
            <img className="restoImg" style={imgStyle} src={CDN_URL+cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    );
}
export default RestaurantCard;
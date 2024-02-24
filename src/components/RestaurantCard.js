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

    const restaruntStyle = {"background": "#f0f0f0"}

    return(
        <div className="restarunt" style={restaruntStyle}>
            <img className="restoImg" style={imgStyle} src={CDN_URL+cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>Rating:{avgRating}</h4>
            <h4>Expected Delivery Time:{deliveryTime}</h4>
        </div>
    );
}
export default RestaurantCard;
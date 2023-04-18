import { Link } from "react-router-dom";

import "../Style/Searchquick.css"


const Quickdisplay = (props) => {

  const listMeal = ({ mealData }) => {
    if (mealData) {
      return mealData.map((item) => {
        return (
            <Link key={item._id} to={`/listing/${item.mealtype_id}`}>
            <div className="quicksearch">
            <div className="tileContainer">
              <div className="tileComponent1">
                <img className='img'  src={item.meal_image} alt="breakfast" />
              </div>
              <div className="tileComponent2">
                <div className="componentHeading">{item.mealtype}</div>
                <div className="componentSubHeading">{item.content}</div>
              </div>
            </div>
            </div>
           
          </Link>
        );
      });
    }
  };

  return <div class="mainTileContainer">{listMeal(props)}</div>;
};

export default Quickdisplay;
import React from 'react';
import './Button.css'

const shopButton = {
  marathon: "SHOP MARATHON GEAR",
  collection: "SHOP COLLECTION",
  phantom: "SHOP PHANTOM",
  eagles: "SHOP EAGLES",
  team: "SHOP TEAM",
  women: "SHOP WOMEN'S",
  bobsled: "SHOP BOBSLED GEAR",
  shopNow: "Shop Now",
  learnMore: "Learn More"
}

const Button = ({btext, buttonStyle}) => {
  return (
    <div className="myButton">
    <button className="button" style={buttonStyle}>{shopButton[btext]}</button>
    {/*<button style={buttonStyle}>{children}</button>*/}
    </div>
  );
}

export default Button;

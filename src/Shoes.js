import React from 'react';
import './Shoes.css'

const imageList = [{src:"static/img/shoe1.jpg", alt:"Shoe1", name:"Cool Shoes", description:"Cool Shoes For Men"},
              {src:"static/img/shoe1.jpg", alt:"Shoe2", name:"Great Shoes", description:"Great Shoes For Women"},
              {src:"static/img/shoe1.jpg", alt:"Shoe3", name:"Awesome Shoes", description:"Awesome Shoes For Men"},
              {src:"static/img/shoe1.jpg", alt:"Shoe4", name:"Fabulous Shoes", description:"Fabulous Shoes For Men"}
            ]

class Shoes extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
render() {
  return (
    <div className="picks">
      {imageList.map((img) => {
        return (
          <div className="shoeSection">
          <li key={img.alt}>
            <img src={img.src} alt={img.alt} id="shoes" />
            <p>{img.name}</p>
            <small>{img.description}</small>
          </li>
          <p><a href="">Shop Now</a></p> 
          </div>
        );
      })}
    </div>
  );

}
};


export default Shoes;

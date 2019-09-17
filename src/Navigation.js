import React, { Component } from 'react';
import './Navigation.css';
import SearchBox from './SearchBox';
import Announcements from './Announcements';
import LandingImage from './LandingImage';
import Footer from './Footer';


const navList = ['Men', 'Women', 'Kids', 'Customize', 'Favorite']
const notice = ["All jerseys selling 80% percent off starting tomorow", "A.N.T SPORTS Basketball is having a 3X3 competition", "Look Fresh in A.N.T SPORTS Apparel"]

class Navigation extends Component {
  render() {

    return (
      <div className="main">
        <div className="navbar">
          <ul className="navItems">
            <li id="logo"><b>A.N.T SPORTS</b></li>
              {
                navList.map((item) =>  {
                return (
                  <div className="navLinks">
                    <li>{item}</li>
                  </div>
                );
              })
            }
            <li><SearchBox/></li>
        </ul>
      </div>
      <Announcements notices={notice}/>
      <LandingImage />
      <Footer />
      </div>
    );
  }
}

export default Navigation;

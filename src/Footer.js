import React from 'react';
import './Footer.css'

const footerList = {
  icons: ["Air Force 1", "VaporMax", "Air Max 90", "Air Max 95"],
  shoes: ["Running Shoes", "Basketball Shoes", "Training Shoes", "Jordan Shoes"],
  kids: ["Kid's Shoes", "Kid's Basketball Shoes", "Kid's Jordan Shoes", "Kid's Running Shoes"],
  featured: ["Jordan Retros","NBA Jerseys", "Joggers", "Sports Bra"]
}

const endFooterList = {
  column: ["STUDENT DISCOUNT", "MILITARY DISCOUNT", "FIND A STORE", "SIGN UP FOR EMAIL", "BECOME A MEMBER", "SITE FEEDBACK"],
  help: ["Order Status","Shipping and Delivery", "Returns", "Payment Options", "Contact Us"],
  about: ["News", "Careers", "Converse Culture & Careers", "Investors", "Sustainable Innovation", "CA Supply Chains Act"]
}

const socialMedia = ["twitter.png","fb.png","youtube.png","ig.png"]

class Footer extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className="main">
      <div className="footerContainer">
        <div class="icons">
          <b>ICONS</b>
          <p>{footerList.icons.map(item => <li>{item}</li>)}</p>
        </div>
        <div class="shoes">
          <b>SHOES</b>
          <p>{footerList.shoes.map(item => <li>{item}</li>)}</p>
        </div>
        <div class="kids">
          <b>KIDS</b>
          <p>{footerList.kids.map(item => <li>{item}</li>)}</p>
        </div>
        <div class="featured">
          <b>FEATURED</b>
          <p>{footerList.featured.map(item => <li>{item}</li>)}</p>
        </div>
      </div>

        <div className="endFooter">
          <div className="giftCards">
            <b>GIFT CARDS</b>
            <b>{endFooterList.column.map(item => <li>{item}</li>)}</b>
          </div>
          <div className="getHelp">
            <b>GET HELP</b>
            <p>{endFooterList.help.map(item => <li>{item}</li>)}</p>
          </div>
          <div className="aboutNike">
            <b>ABOUT A.N.T</b>
            <p>{endFooterList.about.map(item => <li>{item}</li>)}</p>
          </div>
          <div className="social">
            {socialMedia.map(image => <img src={`static/img/${image}`} alt="socialMedia" />)}
          </div>
        </div>

      </div>
    )
  }
}

export default Footer;

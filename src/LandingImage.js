import React from 'react';
import './LandingImage.css'
import Upsell from './Upsell.js'
import Button from './Button.js'
import Shoes from './Shoes';
// import Video from './Video';

var sectionStyle = {
  width: "100%",
  // height: "auto",
  // backgroundSize: 'cover',
  minHeight: '60vh',
};

const shopButtonStyle = {
  background:'transparent',
  borderRadius:'5px',
  border: '2px solid gray',
  borderOutline: 'none',
  height: '40px',
  width: '100px'
}

const containerStyle = {
  width: '48%',
  display: 'inline-block',
  backgroundSize: '100% 80%',
  marginTop:'50px '
}

const Container = ({image,text,btext,subText, buttonStyle, containerStyle}) => (
  <div className="container" style={{...sectionStyle, background: `url("static/img/${image}") no-repeat top/100%`, ...containerStyle}}>
    <div className="landing">
    <Upsell promoText={text} subText={subText} />
    <Button btext={btext} buttonStyle={buttonStyle}/>
    </div>
  </div>
)

const LandingImage = () => {
  return (
    <div className="main">
      <Container text="first" subText="first" image="athlete11.jpg" btext="marathon" />
      <p></p>
      <Container text="second" subText="second" image="athlete4.jpg"  btext ="collection" />
      <h4 style={{padding:"20px"}}>THIS WEEK'S PICKS</h4>
      <Shoes />
      <Container text="third" subText="third" image="asisat.jpg"  btext ="phantom" />
      <div className="crazy">
        <Upsell promoText="crazy" subText="crazy" />
          <div className="shop">
            <li className="shopButton"><Button btext="shopNow" buttonStyle={shopButtonStyle}/></li>
            <li className="shopButton"><Button btext="learnMore" buttonStyle={shopButtonStyle}/></li>
          </div>
        </div>
      <div className="duplicateContainer">
        <Container text="fourth" subText="fourth" image="tigress.jpg"  btext ="team" containerStyle={{...containerStyle,marginRight:'54px'}} />
        <Container text="fifth" subText="fifth" image="eagles2.jpg"  btext ="eagles" containerStyle={containerStyle} />
      </div>
      <Container text="sixth" subText="sixth" image="bobsleigh.jpg" btext="bobsled" />
      </div>
  );
}

export default LandingImage

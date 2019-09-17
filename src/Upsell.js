import React from 'react';
import './Upsell.css'

var promote = {
  first: "CRAZY DREAMS MAKE BROKEN RECORDS",
  second: "SPORT, CULTURE AND STYLE",
  third: "PLAY WITH PASSION",
  fourth: "TEAM WORK AND DISCIPLINE",
  fifth: "SOAR LIKE AN EAGLE",
  sixth: "MAKE HISTORY",
  crazy: "It's Only A Crazy Dream Until You Do It"
}

var subTexts = {
  first: "A.N.T Sport Pack's street-ready camo, dynamic graphics and modern textiles let you push the boundaries of sport and style.",
  second: "Some of the season's most-wanted shades feel right at home on our legendary silhouette.",
  third: "They will remember your name",
  fourth: "Talent wins games, but teamwork and intelligence win championships.",
  fifth: "The new Nigerian Super Eagle's Kit available in stores near you",
  sixth: "Put yourself and your country on the map. Nigeria's first ever Bobsled team",
  crazy: "Chase your dreams in gear designed to bring out your best",
}


const Upsell = ({promoText,subText, upSellStyle}) => {
  return (
      <div className="promotional">
        <h1 id="titleText">{promote[promoText]}</h1>
        <p id='subtext' style={upSellStyle}>{subTexts[subText]}</p>
      </div>
  );
}


export default Upsell;

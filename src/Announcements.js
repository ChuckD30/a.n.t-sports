import React from 'react';
import './Announcements.css';

class Announcements extends React.Component {

  // displayNotices = () => {
  //   setInterval(() => {
  //     // alert("It works")
  //   }, 3000)
  //     return this.props.notices.forEach((notice) => notice)
  // }

  render() {
    const { notices} = this.props;
    return (
      <div>
          <p style={{textAlign:'center'}}>{notices[0]}</p>
      </div>)
  }
}


export default Announcements;

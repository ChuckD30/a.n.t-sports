import React from 'react';
import './Video.css'

const Video = () => {
  return (
    <div>
    <video width="100%" height="281" controls>
        <source src="static/vid/dunkContest.mp4" type="video/mp4" />
    </video>
    </div>
  );
}


export default Video;

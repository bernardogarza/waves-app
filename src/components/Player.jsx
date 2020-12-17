import React from 'react';

const Player = () => {
  return (
    <div className="player">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" name="range" />
        <p>End Time</p>
      </div>
      <div className="play-control">
        <p>PlayControl</p>
      </div>
    </div>
  );
};

export default Player;

import React from 'react';
import './BasketballPlayerCard.css';

const BasketballPlayerCard = ({ name, image, position, pointsPerGame, assistsPerGame, reboundsPerGame }) => {
  return (
    <div className="player-card">
      <img src={image} alt={`${name}`} className="player-image" />
       <div className="player-info">
        <h2 className="player-name">{name}</h2>
        <p className="player-position">{position}</p>
        <div className="player-stats">
          <p>Points per Game: {pointsPerGame}</p>
          <p>Assists per Game: {assistsPerGame}</p>
          <p>Rebounds per Game: {reboundsPerGame}</p>
        </div>
      </div>
    </div>
  );
};

export default BasketballPlayerCard;

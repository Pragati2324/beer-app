
import React from 'react';

const BeerCard = ({ beer }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '300px' }}>
      <img src={beer.image_url} alt={beer.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <h3>{beer.name}</h3>
      <p>{beer.tagline}</p>
    </div>
  );
};

export default BeerCard;

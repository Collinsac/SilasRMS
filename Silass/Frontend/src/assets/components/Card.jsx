import React from 'react';

const Card = (props) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex-1">
      <h3 className="text-xl font-bold mb-2">{props.title}</h3>
      <p className="text-3xl font-semibold">{props.number}</p>
    </div>
  );
};

export default Card;
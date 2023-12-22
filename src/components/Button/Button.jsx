import React from 'react';

 const Button = ({onClick}) => {
  return (
    <div>
      <button type="button" onClick={onClick}>Load More</button>
    </div>
  )
 }

export { Button };

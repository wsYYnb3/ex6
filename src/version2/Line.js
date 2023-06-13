import React from 'react';
import Button from './Button';

function Line(props) {
  const { value1, value2, onClick } = props;

  return (
    <div className="d-flex justify-content-center line">
      <Button value={value1} onClick={onClick} isLeft={true} />
      <Button value={value2} onClick={onClick} isLeft={false} />
    </div>
  );
}

export default Line;

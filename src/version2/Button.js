import React from 'react';

function Button(props) {
  const { value, isLeft, onClick } = props;

  const handleClick = () => {
    onClick(value);
  };

  const buttonClasses = `btn ${isLeft ? 'btn-danger' : 'btn-success'} rounded-pill`;

  return (
    <button className={buttonClasses} onClick={handleClick}>
      {value}
    </button>
  );
}

export default Button;

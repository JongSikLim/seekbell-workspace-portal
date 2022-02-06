import React from 'react';

const MenuBox = () => {
  const handleClick = () => {
    fetch('http://localhost:3000/api/category', {
      method: 'GET',
      mode: 'same-origin',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        const data = res.json();
        console.log('data: ', data);
      })
      .catch((err) => {
        console.log('err: ', err);
      });
  };
  return (
    <div>
      <button onClick={handleClick}>아아 마이크 테스트</button>
    </div>
  );
};

export default MenuBox;

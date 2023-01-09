import React from 'react';
import { box1, box2 } from './styles';

const Header = () => {
  return (
    <div>
      <div css={box1}>Header</div>
      <div css={box2}>UI Component Test</div>
    </div>
  );
};

export default Header;

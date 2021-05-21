/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Button from './Button';

const headerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-bottom: 20px; */
`;
const handleClick = (e) => {
  console.log('object');
};

const Header = () => {
  return (
    <header css={headerStyle}>
      <h1 style={{ fontFamily: 'Julius Sans One' }}>Guest List</h1>
      <Button color="green" text="Add" onClick={handleClick} />
    </header>
  );
};

export default Header;

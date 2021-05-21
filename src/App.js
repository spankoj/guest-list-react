/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import AddGuest from './components/AddGuest';
import Guests from './components/Guests';
import Header from './components/Header';

const containerStyle = css`
  margin: 30px auto;
  padding: 30px;
  border: 1px solid #234598;
  border-radius: 5px;
  min-height: 300px;
  max-width: 500px;
  /* overflow: auto; */
`;
function App() {
  return (
    <div css={containerStyle}>
      <Header />
      <AddGuest />
      <Guests />
    </div>
  );
}

export default App;

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FaTimes } from 'react-icons/fa';

const guestStyle = css`
  background-color: #f4f4f4;
  margin: 10px 5px;
  padding: 10px 20px;
  cursor: pointer;
`;

const guestStyleH3 = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const attendingStyle = css`
  border-left: 5px solid green;
  background-color: #f4f4f4;
  margin: 10px 5px;
  padding: 10px 20px;
  cursor: pointer;
`;

const Guest = ({ guest, onDelete, onToggle }) => {
  return (
    <div
      css={guest.attending ? attendingStyle : guestStyle}
      onDoubleClick={() => onToggle(guest.id)}
    >
      <h3 css={guestStyleH3}>
        {`${guest.firstName} ${guest.lastName}`}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(guest.id)}
        />
      </h3>
    </div>
  );
};

export default Guest;

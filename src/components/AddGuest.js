/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';

const formStyle = css`
  background-color: #fff;
  margin: 40px auto;
`;

const formControl = css`
  margin: 20px 0;
`;

const labelStyle = css`
  font-family: 'Julius Sans One';
  display: block;
`;

const inputStlye = css`
  width: 100%;
  height: 40px;
  padding: 10px 20px;
  margin: 5px;
  font-size: 17px;
`;

const inputCheckBoxStyle = css`
  margin: 20px 0;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const inputBtnStyle = css`
  background: #000;
  color: #fff;
  font-family: inherit;
  font-size: 15px;
  margin: 5px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  display: block;
  width: 100%;
`;

const AddGuest = ({ onAdd }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [attending, setAttending] = useState(false);

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleCheckBox = () => {
    setAttending(!attending);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (firstName === '') {
      alert('Please type in your name');
      return;
    }

    onAdd({ firstName, lastName, attending });

    setFirstName('');
    setLastName('');
    setAttending(false);
  };
  return (
    <form css={formStyle} onSubmit={onSubmit}>
      <div css={formControl}>
        <label htmlFor="firstname" css={labelStyle}>
          First Name
        </label>
        <input
          css={inputStlye}
          type="text"
          name="firstname"
          placeholder="Add First Name"
          value={firstName}
          onChange={handleFirstName}
        />
      </div>
      <div css={formControl}>
        <label htmlFor="lastname" css={labelStyle}>
          Last Name
        </label>
        <input
          css={inputStlye}
          type="text"
          name="lastname"
          placeholder="Add Last Name"
          value={lastName}
          onChange={handleLastName}
        />
      </div>
      <div css={inputCheckBoxStyle}>
        <label htmlFor="attending" css={labelStyle} style={{ flex: 1 }}>
          Attending
        </label>
        <input
          style={{ flex: 2, height: '20px' }}
          type="checkbox"
          name="attending"
          checked={attending}
          onClick={handleCheckBox}
        />
      </div>
      <input css={inputBtnStyle} type="submit" value="Add guest" />
    </form>
  );
};

export default AddGuest;

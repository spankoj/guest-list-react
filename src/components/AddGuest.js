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
  const [firstNameInput, setFirstNameInput] = useState('');
  const [lastNameInput, setLastNameInput] = useState('');
  const [attendingCheck, setAttendingCheck] = useState(false);

  const handleFirstName = (e) => {
    setFirstNameInput(e.target.value);
  };
  const handleLastName = (e) => {
    setLastNameInput(e.target.value);
  };
  const handleCheckBox = () => {
    setAttendingCheck(!attendingCheck);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (firstNameInput === '') {
      alert('Please type in your name');
      return;
    }

    onAdd({ firstNameInput, lastNameInput, attendingCheck });

    setFirstNameInput('');
    setLastNameInput('');
    setAttendingCheck('');
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
          value={firstNameInput}
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
          value={lastNameInput}
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
          checked={attendingCheck}
          onClick={handleCheckBox}
        />
      </div>
      <input css={inputBtnStyle} type="submit" value="Save" />
    </form>
  );
};

export default AddGuest;

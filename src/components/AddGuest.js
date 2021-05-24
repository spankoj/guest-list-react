/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

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

const AddGuest = () => {
  return (
    <form css={formStyle}>
      <div css={formControl}>
        <label htmlFor="firstname" css={labelStyle}>
          First Name
        </label>
        <input
          name="firstname"
          type="text"
          placeholder="Add First Name"
          css={inputStlye}
        />
      </div>
      <div css={formControl}>
        <label htmlFor="lastname" css={labelStyle}>
          Last Name
        </label>
        <input
          name="lastname"
          type="text"
          placeholder="Add Last Name"
          css={inputStlye}
        />
      </div>
      <div css={inputCheckBoxStyle}>
        <label htmlFor="attending" css={labelStyle} style={{ flex: 1 }}>
          Attending
        </label>
        <input
          style={{ height: '20px' }}
          name="attending"
          type="checkbox"
          style={{ flex: 2 }}
        />
      </div>
      <input type="submit" value="Save" css={inputBtnStyle} />
    </form>
  );
};

export default AddGuest;

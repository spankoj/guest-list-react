/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

const Button = ({ color, text, onClick }) => {
  // emotion/react styling
  const buttonStyle = css`
    background: ${color};
    color: #fff;
    font-family: inherit;
    font-size: 15px;
    margin: 5px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
  `;

  return (
    <button onClick={onClick} css={buttonStyle}>
      {text}
    </button>
  );
};
// Setting default prop in an object for Button component

Button.defaultProps = {
  color: '#000',
};

// Setting prop types for Button component

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;

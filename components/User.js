import React from 'react';
import PropTypes from 'prop-types';

const User = ({ name, age }) => (
  <div>
    <h1>{name}</h1>
    <p>Age: {age}</p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default User;


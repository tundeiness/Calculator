
import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <div className="calculator__display">
    <p>{ result }</p>
  </div>
);

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;

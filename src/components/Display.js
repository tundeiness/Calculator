/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';


const Display = ({ result }) => (
  <div className="calculator__display">
    <p>{ result }</p>
  </div>
);


export default Display;

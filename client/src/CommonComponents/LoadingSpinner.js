import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const LoadingSpinner = (props) => {
  const { text } = props;
  const loadingText = text || 'Loading...';
  return (
    <span>
      <h2 className="d-inline"> {loadingText}</h2> <FontAwesomeIcon icon={faSpinner} spin size="6x" />
    </span>
  );
};

LoadingSpinner.propTypes = {
  text: PropTypes.string,
};

export default LoadingSpinner;

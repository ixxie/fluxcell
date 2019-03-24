import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';
import withContainer from './withContainer';

const Error = (props) => {
  const { title, text, anchor } = props.error;
  return (
    <Alert id="error" color="danger">
      <h3 id="error__title">{title}</h3>
      <p id="error__text">{text}</p>
      <a id="error__anchor" href={anchor}>
        {anchor}
      </a>
    </Alert>
  );
};

Error.propTypes = {
  error: PropTypes.shape({ title: PropTypes.string, text: PropTypes.string, anchor: PropTypes.string }),
};

export default withContainer(Error);

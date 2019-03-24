import React from 'react';
import PropTypes from 'prop-types';
import { Button, Row, Col } from 'reactstrap';
import restClient from '../../utils/restClient';
import TextArea from './TextArea';

const TestBench = (props) => {
  const testPost = () => {
    restClient
      .post('postTest', { foo: 'bar' })
      .then(res => console.log(res))
      .catch(err => console.log('err', err));
  };

  const testGet = () => {
    restClient
      .get('getTest', 'bar')
      .then(res => console.log(res))
      .catch(err => console.log('err', err));
  };

  testGet();
  testPost();

  return (
    <Row>
      <Col xs="12">
        <TextArea {...props} />
      </Col>
    </Row>
  );
};

TestBench.propTypes = {};

export default TestBench;

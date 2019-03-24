import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { LoadingSpinner, withContainer } from '../CommonComponents';
import Routes from '../Components/Routes';
import Header from '../Components/Header';

const RootContainer = (props) => {

  if (props.isInitializing === undefined || props.isInitializing) {
    const LoadingSpinnerWithContainer = withContainer(LoadingSpinner);

    return <LoadingSpinnerWithContainer text="Initializing..." />;
  }
  const ContainerWithMargin = styled(Container)`
    margin-top: 50px;
  `;

  return (
    <div>
      <Router basename="/">
        <div>
          <Header {...props} />
          <ContainerWithMargin fluid className="rootContainer">
            <Row className="mb-4 welcome-row">
              <Col sm="12" className="welcome-row__col">
                <Routes {...props} />
              </Col>
            </Row>
          </ContainerWithMargin>
        </div>
      </Router>
    </div>
  );
};

RootContainer.propTypes = {
  isInitializing: PropTypes.bool,
  auth: PropTypes.shape({ Auth: PropTypes.object }),
};

export default RootContainer;

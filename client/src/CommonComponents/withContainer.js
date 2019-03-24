import React from 'react';
import { Container } from 'reactstrap';
import styled from 'styled-components';

const withContainer = WrappedComponent => (props) => {
  const { paddingTop } = props;
  const StyledContainer = styled(Container)`
    padding-top: ${paddingTop || '50px'};
  `;
  return (
    <StyledContainer fluid className="app-container">
      <WrappedComponent {...props} />
    </StyledContainer>
  );
};

export default withContainer;

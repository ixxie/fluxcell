import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';
import styled from 'styled-components';

export default function Welcome() {

  const StyledCard = styled(Card)`
      background-color: white;
      &:hover {
        background-color: #caffe5;
      }
    `;

  return (
    <StyledCard>
      <CardImg
        top
        width="100%"
        src="https://i.imgur.com/n744BL9.png"
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle>Welcome to Fluxdash</CardTitle>
        <CardSubtitle>Will be awesome</CardSubtitle>
        <CardText />
        <Button color="primary">This button does nothing</Button>
      </CardBody>
    </StyledCard>
  );
}

import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps, mergeProps } from '../utils/mapper';
import { Row, Col, Card, CardBody, CardTitle, CardImg, CardSubtitle, CardText, Button } from 'reactstrap';
import Chat from '../Components/Chat';

import './mainContainer.css';
import Space from '../Components/Space';

const MainContainer = props => (
  <Row>
    <Col xs="4">
      <div>
        <Card>
          <CardBody>
            <CardTitle>Create Space</CardTitle>
            <CardSubtitle />
            <CardText>
              <Space />
            </CardText>
          </CardBody>
        </Card>
      </div>
      <div>
        <Card>
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
      <div>
        <Card>
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    </Col>
    <Col xs="8">
      <Chat {...props} />
    </Col>
  </Row>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(MainContainer);

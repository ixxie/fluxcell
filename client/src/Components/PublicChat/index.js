

import React from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardImg, CardSubtitle, CardText, Button } from 'reactstrap';
import TextInputForm from './TextInputForm';
import ChatBox from './ChatBox';
import './publicChat.css';

const PublicChat = props => (

  <div className="public-chat">
    <Row>
      <Col xs="4">
        <div>

          <Card>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
        <div>

          <Card>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
        <div>

          <Card>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
      </Col>
      <Col xs="8">
        <ChatBox className="text-output" {...props} />
        <TextInputForm {...props} />
      </Col>
    </Row>
    <Row />
  </div>
);

export default PublicChat;

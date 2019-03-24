import React from 'react';
import styled from 'styled-components';
import { compose, withState, withHandlers } from 'recompose';
import { Button, Card, CardText, CardBody } from 'reactstrap';
import { subscribe, emit } from '../../utils/socketClient';

const StyledCardText = styled(CardText)`
  min-height: 70vh;
`;

const TextArea = (props) => {
  const { text, setText, appendText, auth } = props;
  console.log('text', text);

  subscribe({
    cb: (err, timestamp) => {
      if (err) throw new Error(err);
      const stringTimeStamp = timestamp.toString();

      appendText(`${stringTimeStamp} | `);
    },
    name: 'chatTestEmit',
  });

  return (
    <div>
      <Card>
        <CardBody>
          <StyledCardText>{text}</StyledCardText>
        </CardBody>
      </Card>

      <Button color="primary" onClick={() => emit({ name: 'chatTestListener', msg: auth.login.name })}>
        Send
      </Button>
    </div>
  );
};
const enhance = compose(
  withState('text', 'setText', ''),
  withHandlers({
    appendText: props => (text) => {
      props.setText(props.text + text);
    },
  })
);
export default enhance(TextArea);

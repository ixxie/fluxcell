import React from 'react';
import { compose, withState, withHandlers, lifecycle } from 'recompose';
import { Alert, Card, CardText, CardBody } from 'reactstrap';
import { subscribe } from '../../utils/socketClient';
import restClient from '../../utils/restClient';

function scrollToBottom() {
  const card = document.getElementById('text-output__card');
  // card.scrollIntoView({ block: 'end', behavior: 'smooth' });
  card.scrollTop = card.scrollHeight;
}

const ChatBox = (props) => {
  const { addMessage, messages, setMessages, subscribeToSocket, isSubscribedToSocket } = props;

  if (!isSubscribedToSocket) {
    subscribe({
      cb: (err, res) => {
        console.log('subscribe listener hit', res);
        if (err) throw new Error(err);
        // addMessage(res);
        // props.setMessages(res.posts);
        addMessage(res);
        scrollToBottom();
      },
      name: 'chatServer',
    });

    subscribeToSocket(true);
  }

  return (
    <Card id="text-output__card" className="text-output__card">
      <CardBody id="text-output__card-body">
        <CardText>
          {messages.map(m => (
            <Alert className="text-output__message" key={`message-${m.id}`}>{`${m.username}: ${m.message}`}</Alert>
          ))}
        </CardText>
      </CardBody>
    </Card>
  );
};

const enhance = compose(
  withState('messages', 'setMessages', []),
  withState('isSubscribedToSocket', 'subscribeToSocket', false),
  withHandlers({
    addMessage: props => (message) => {
      if (props.messages.find(msg => msg.id === message.id) === undefined) {
        props.messages.push(message);
      }

      props.setMessages(props.messages);
      scrollToBottom();
    },
  }),
  lifecycle({
    componentDidMount() {
      restClient
        .get('getPostsByChannel', 'general')
        .then((res) => {
          console.log('payload', res.payload);
          this.props.setMessages(res.payload);
          scrollToBottom();
        })
        .catch(err => console.log('err', err));
    },
  })
);
export default enhance(ChatBox);

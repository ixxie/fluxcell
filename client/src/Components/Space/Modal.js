import React, { useState } from 'react';
import ReactModal from 'react-modal';
import useModal from './useModal';
import { Button } from 'reactstrap';
import Form from './Form';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)

ReactModal.setAppElement('#root');

const Modal = (props) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(!isOpen)}>Space</Button>
      <ReactModal isOpen={isOpen} onRequestClose={() => setOpen(false)} style={customStyles} contentLabel="Modal">
        <Form />
      </ReactModal>
    </div>
  );
};

export default Modal;

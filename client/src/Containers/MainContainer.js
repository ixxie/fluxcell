import React from 'react';
import PublicChat from '../Components/PublicChat';
import './mainContainer.css';

const MainContainer = props => (
  <PublicChat className="public-chat-container" {...props} />
);

export default MainContainer;

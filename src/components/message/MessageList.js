import React from 'react';
import Message from './Message.js'

const MessageList = (props) =>(
  <div className="messages-list">
    {
      props.messages.map( (message, index)=> (
          <Message key={index}
            message={message}
          />
      ))
    }
  </div>
);

export default MessageList

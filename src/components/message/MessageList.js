// @flow

import React from 'react';
import Message from './Message.js'
import type {MessageType} from './../../domains/Message'

type Props = {
  messages: Array<MessageType>
}

const MessageList = (props: Props) =>(
  <div className="messages-list">
    {
      props.messages.map( (message, index)=> (
          <Message key={index}
            value={message.value}
            groupId={message.groupId}
          />
      ))
    }
  </div>
);

export default MessageList

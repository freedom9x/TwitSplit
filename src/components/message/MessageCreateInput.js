// @flow

import React from 'react';
import './message.scss'

type Props = {
  value: string,
  updateInput: (value: string) => void,
  addMessage: (newMessage: string) => void,
}

const MessageCreateInput = (props: Props) =>(
  <div className="message-create">
    <form className="message-input-container">
      <textarea className="message-input"
        rows="5"
        placeholder="Input your messge here..."
        value={props.value}
        onChange={(e)=> {
          props.updateInput(e.target.value)
          e.preventDefault()
        }}
      />
      <button className="message-submit"
        disabled={props.value.length === 0}
        onClick={(e)=> {
          props.addMessage(props.value)
          e.preventDefault()
        }}
      >
        Submit
      </button>
      </form>
    </div>
);

export default MessageCreateInput

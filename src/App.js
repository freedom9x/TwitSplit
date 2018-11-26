// @flow
import React, { Component } from 'react'
import './App.scss'
import MessageCreateInput from './components/message/MessageCreateInput'
import MessageList from './components/message/MessageList'
import MessageServices from './services/MessageServices'
import type {MessageType} from './domains/Message'

type State = {
  messages: Array<MessageType>,
  messageInput: string,
  messageError: string,
}

type Props = {}

class App extends Component<Props, State> {

  constructor(props: Props){
    super(props);
    this.state = {
      messages: [],
      messageInput: '',
      messageError: '',
    };

    this.addMessage = this.addMessage.bind(this)
    this.updateInput = this.updateInput.bind(this)
  }

  addMessage: () => void

  addMessage(newMessage: string){
    const {messages} = this.state
    let groupId = 1
    if(messages.length > 0){
      groupId = messages[0].groupId + 1
    }

    let chunks = MessageServices.splitMessage(newMessage, 50)

    if(chunks && chunks.length > 0){
      let newMessages = chunks.map(c=>({groupId, value: c}))
      this.setState( state=>({
        ...state,
        messages: [...newMessages, ...state.messages],
        messageInput: '',
        messageError: '',
      }))
    }else{
      this.setState ( state=> ({
        ...state,
        messageError: "Your message is invalid"
      }))
    }
  }

  updateInput: () => void
  updateInput(value: string){
    this.setState( state=>({
      ...state,
      messageInput: value
    }))
  }

  render() {
    const {messageInput, messages, messageError} = this.state
    return (
      <div id="app" className="App">
        <section id="app-header"> </section>
        <section id="app-profile"> </section>
        <section id="app-message-center">
          <div className="err-input-message">{messageError} </div>
          <MessageCreateInput
            addMessage={this.addMessage}
            updateInput={this.updateInput}
            value={messageInput}
          />
          <MessageList
            messages={messages}
          />
        </section>
        <section id="app-news"> </section>
      </div>
    );
  }
}

export default App;

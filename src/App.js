import React, { Component } from 'react'
import './App.scss'
import MessageCreateInput from './components/message/MessageCreateInput'
import MessageList from './components/message/MessageList'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      messages: [],
      messageInput: '',
    }
    this.addMessage = this.addMessage.bind(this)
    this.updateInput = this.updateInput.bind(this)
  }

  addMessage(newMessage){
    this.setState( state=>({
      ...state,
      messages: [newMessage, ...state.messages],
      messageInput: '',
    }))
  }

  updateInput(value){
    this.setState( state=>({
      ...state,
      messageInput: value
    }))
  }

  render() {
    return (
      <div id="app" className="App">
        <section id="app-header"> </section>
        <section id="app-profile"> </section>
        <section id="app-message-center">
          <MessageCreateInput
            addMessage={this.addMessage}
            updateInput={this.updateInput}
            value={this.state.messageInput}
          />
          <MessageList
            messages={this.state.messages}
          />
        </section>
        <section id="app-news"> </section>
      </div>
    );
  }
}

export default App;

import React from 'react'

class Message extends React.PureComponent{

  constructor(props){
    super()
  }

  render(){
    const {message} = this.props
    return (
      <div className="tweeter-message">
        {message}
      </div>
    )
  }
}

export default Message

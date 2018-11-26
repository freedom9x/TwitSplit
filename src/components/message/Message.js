// @flow
import React from 'react'

type Props = {
  value: string,
  groupId: number,
}

class Message extends React.PureComponent<Props>{

  render(){
    const {value, groupId} = this.props

    return (
      <div className={`tweeter-message ${groupId % 2 === 0? 'even': 'odd'}`}>
        {value}
      </div>
    )
  }
}

export default Message

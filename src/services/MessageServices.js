// @flow

export const isValidMessage = (msg: string, maxLength: number): boolean => {
  if(msg.length > maxLength && !msg.trim().includes(' ')){
    return false
  }
  return true
}

export const splitMessageWithIndicator = (msg: string, indicator: string, maxLength: number) =>{

  if((indicator+msg).length <= maxLength){
    //indicator + msg is not greater than maxLength
    return [indicator+msg, '']
  }else{
    //try to get first string by find last space inside a msg50 string
    let msg50 = msg.slice(0, maxLength-indicator.length)
    let lastWhiteSpcae = msg50.lastIndexOf(' ')
    if(lastWhiteSpcae > 0){
      let chunk = indicator + msg.slice(0, lastWhiteSpcae)
      return [chunk, msg.slice(lastWhiteSpcae + 1)]
    }
  }
  //if can not find lastWhiteSpace so return
  return [msg, msg]
}

export const splitMessageWithParts = (msg: string, parts: number, maxLength: number) => {
  let message = msg,  msgs = []
  let index =0 ,indicator = `${index}/${parts} `
  let chunk='',  remaining = message

  while(remaining.length > 0){
    index = index + 1
    indicator = `${index}/${parts} `;
    let arr = splitMessageWithIndicator(remaining, indicator, maxLength)
    chunk = arr[0]
    remaining =arr[1]
    if(isValidMessage(chunk, maxLength)){
      msgs.push(chunk)
    }else{
      return false
    }
  }
  //split ok
  if(index === parts){
    return msgs
  }
  //can not slipt into  parts
  return []
}

export const splitMessage = (msg: string, maxLength: number) => {
  let msgs = []
  let l = msg.length
  if(l <= maxLength){
    msgs.push(msg)
  }else{
    for(let i=Math.ceil(l/maxLength); i < l; i++){
      //try to splip into i parts
      msgs = splitMessageWithParts(msg, i, maxLength)
      //check chunks is valid, chunk is no-space and have more than maxLength
      if(msgs === false){
        return false
      }
      if(msgs.length > 0){
        return msgs
      }
    }
  }
  //return empty array
  return msgs
}

const MessageServices = {
  isValidMessage,
  splitMessage
}

export default MessageServices

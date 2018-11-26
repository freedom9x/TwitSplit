import MessageServices from './MessageServices'

describe('Message Services', () => {
  const maxLength = 50
  test('Test message is valid', () => {
    let sampleMessage = 'this is sample message'
    expect(MessageServices.isValidMessage(sampleMessage, maxLength)).toBe(true)
  })

  test('Test message split into 2 parts, every part should is valid message', () => {
    let sampleMessage = "I can't believe Tweeter now supports chunking my messages, so I don't have to do it myself."
    let result = MessageServices.splitMessage(sampleMessage, maxLength)
    expect(result.length).toBe(2)
    result.map(r=> expect(MessageServices.isValidMessage(r, maxLength)).toBe(true))
  })

  test('Test message split into 12 parts, every part should is valid message', () => {
    let sampleMessage = "An expression evaluated before each pass through the loop. If this condition evaluates to true, statement is executed. When condition evaluates to false, execution continues with the statement after the while loop.statement An optional statement that is executed as long as the condition evaluates to true. To execute multiple statements within the loop, use a block statement ({ ... }) to group those statements.Note:  Use the break statement to stop a loop before condition evaluates to true."
    let result = MessageServices.splitMessage(sampleMessage, maxLength)
    expect(result.length).toBe(12)
    result.map(r=> expect(MessageServices.isValidMessage(r, maxLength)).toBe(true))
  })

  test('Test invalid message cannot split', () => {
    let sampleMessage = "I thinks hecopedverywellunderthecircumstances.Obviouslywecan'tdealwiththeproblemuntilweknowallthecircumstances.Shediedinsuspiciouscircumstances.Weopposecapitalpunishmentin/underanycircumstances.Undernocircumstancesshouldyou(=youshouldnot)approachtheman.Themeetinghasbeencancelledduetocircumstancesbeyondourcontrol."
    let result = MessageServices.splitMessage(sampleMessage, maxLength)
    expect(result).toBe(false)
  })
});

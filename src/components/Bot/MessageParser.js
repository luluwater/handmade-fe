import React from 'react'


const MessageParser = ({
  children,
  setState,
  actions,
  createChatBotMessage,
}) => {
  const parse = (message) => {
    if (message.includes('hello')) {
      actions.handleHello()
    }

    if (message.includes('dog')) {
      actions.handleDog()
    }
  }

  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.')

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }))
  }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: { handleHello },
        })
      })}
    </div>
  )
}

export default MessageParser

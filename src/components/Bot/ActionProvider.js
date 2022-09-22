import React from 'react'

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage(
      '你好 ! 歡迎來到手手，需要什麼協助呢 ?'
    )

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }))
  }

  //顯示金工所有店家
  const handleMetalwork = () => {
    const botMessage = createChatBotMessage('這是金工的所有店家', {})

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }))
  }

  //顯示花藝所有店家
  const handleFloral = () => {
    const botMessage = createChatBotMessage('這是花藝的所有店家', {
      widget: 'globalStatistics',
      loading: true,
      terminateLoading: true,
      withAvatar: true,
    })

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }))
  }

  //顯示陶藝所有店家
  const handlePottery = () => {
    const botMessage = createChatBotMessage('這是陶藝的所有店家', {
      widget: 'globalStatistics',
      loading: true,
      terminateLoading: true,
      withAvatar: true,
    })

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }))
  }

  // const handlPottery = () => {
  //   const botMessage = createChatBotMessage('這是陶藝的所有店家', {
  //     widget: 'dogPicture',
  //   })

  //   setState((prev) => ({
  //     ...prev,
  //     messages: [...prev.messages, botMessage],
  //   }))
  // }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleMetalwork,
            handlePottery,
            handleFloral,
          },
        })
      })}
    </div>
  )
}

export default ActionProvider

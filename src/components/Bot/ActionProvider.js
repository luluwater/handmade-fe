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

  const handleOptions = (options) => {
    const botMessage = createChatBotMessage('請問需要什麼協助呢 ?', {
      widget: 'overview',
      loading: true,
      terminateLoading: true,
      ...options,
    })

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }))
  }

  const handleShowCategory = () => {
    const botMessage = createChatBotMessage('手作體驗種類', {
      widget: 'showCategory',
      loading: true,
      terminateLoading: true,
      withAvatar: true,
    })

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }))
  }

  const handleShopNow = () => {
    const botMessage = createChatBotMessage('馬上購物', {
      widget: 'showNow',
      loading: true,
      terminateLoading: true,
      withAvatar: true,
    })

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }))
  }

  const handleSignup = () => {
    const botMessage = createChatBotMessage('註冊會員', {
      widget: 'signupPlease',
      loading: true,
      terminateLoading: true,
      withAvatar: true,
    })

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }))
  }

  const handleViewBlog = () => {
    const botMessage = createChatBotMessage('觀看部落格文章', {
      widget: 'viewBlog',
      loading: true,
      terminateLoading: true,
      withAvatar: true,
    })

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }))
  }

  const handleConcatUs = () => {
    const botMessage = createChatBotMessage('聯絡我們', {
      widget: 'concatUs',
      loading: true,
      terminateLoading: true,
      withAvatar: true,
    })

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }))
  }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleShowCategory,
            handleShopNow,
            handleSignup,
            handleViewBlog,
            handleConcatUs,
            handleOptions,
          },
        })
      })}
    </div>
  )
}

export default ActionProvider

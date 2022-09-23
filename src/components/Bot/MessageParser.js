import React from 'react'

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes('hello') || message.includes('你好')) {
      actions.handleHello()
    }

    if (message.includes('dog')) {
      actions.handleDog()
    }

    if (message.includes('選項') || message.includes('option')) {
      actions.handleOptions()
    }

    if (message.includes('類別') || message.includes('店家')) {
      actions.handleShowCategory()
    }

    if (message.includes('買')) {
      actions.handleShopNow()
    }
    if (message.includes('會員') || message.includes('註冊')) {
      actions.handleSignup()
    }

    if (message.includes('部落格') || message.includes('文章')) {
      actions.handleViewBlog()
    }

    if (message.includes('聯絡')) {
      actions.handleConcatUs()
    }
  }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        })
      })}
    </div>
  )
}

export default MessageParser

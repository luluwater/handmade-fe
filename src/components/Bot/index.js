import React from 'react'
import Chatbot from 'react-chatbot-kit'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import config from './config'
import MessageParser from './MessageParser'
import ActionProvider from './ActionProvider'

function CrazyCatBot() {
  const [show, setShow] = useState(false)
  const handleToggle = (e) => {
    setShow((pre) => !pre)
  }

  return (
    <>
      <div>
        {show && (
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
            headerText="手手客服"
            placeholderText="請輸入..."
            // messageHistory={loadMessages()}
            // saveMessages={saveMessages}
            // validator={validateInput}
            runInitialMessagesWithHistory
            disableScrollToBottom={false}
          />
        )}
      </div>
      <div onClick={handleToggle} className="bot-switch">
        {show ? (
          <>123</>
        ) : (
          <FontAwesomeIcon className="bot-switch_times" icon="fas fa-times" />
        )}
      </div>
    </>
  )
}

export default CrazyCatBot

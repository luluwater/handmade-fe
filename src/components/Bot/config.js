import { createChatBotMessage } from 'react-chatbot-kit'
import CatPicture from './CatPic'
import './Bot.scss'

const botName = '黑色小花貓 '

const config = {
  initialMessages: [
    createChatBotMessage(`哈囉 ! 歡迎來到手手`),
    createChatBotMessage('想了解的手作體驗課程', {
      withAvatar: false,
      delay: 500,
      widget: 'overview',
    }),
  ],

  botName: botName,
  widgets: [
    {
      widgetName: 'dogPicture',
      widgetFunc: (props) => <CatPicture {...props} />,
    },
  ],
}

export default config

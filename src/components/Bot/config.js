import { createChatBotMessage } from 'react-chatbot-kit'
import CatPicture from './CatPic'
import './Bot.scss'
import ShowCategory from './widgets/Showcategory'
import Contact from './widgets/Contact'
import ShopNow from './widgets/ShopNow'
import ViewBlog from './widgets/ViewBlog'
import SignupWidget from './widgets/SignupWidget'
import OverView from './widgets/OverView'

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
    {
      widgetName: 'overview',
      widgetFunc: (props) => <OverView {...props} />,
      mapStateToProps: ['messages'],
    },
    {
      widgetName: 'showCategory',
      widgetFunc: (props) => <ShowCategory />,
    },
    {
      widgetName: 'showNow',
      widgetFunc: (props) => <ShopNow />,
    },
    {
      widgetName: 'concatUs',
      widgetFunc: (props) => <Contact />,
    },
    {
      widgetName: 'signupPlease',
      widgetFunc: (props) => <SignupWidget />,
    },
    {
      widgetName: 'viewBlog',
      widgetFunc: (props) => <ViewBlog />,
    },
  ],
}

export default config

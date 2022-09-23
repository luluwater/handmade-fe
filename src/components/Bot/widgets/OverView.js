import Options from './Options'

const GeneralOptions = (props) => {
  const options = [
    {
      name: '手作體驗種類',
      handler: props.actionProvider?.handleShowCategory,
      id: 1,
    },
    {
      name: '馬上購物',
      handler: props.actionProvider?.handleShopNow,
      id: 2,
    },
    {
      name: '註冊會員',
      handler: props.actionProvider?.handleSignup,
      id: 3,
    },
    {
      name: '觀看部落格文章',
      handler: props.actionProvider?.handleViewBlog,
      id: 4,
    },
    {
      name: '聯絡我們',
      handler: props.actionProvider?.handleConcatUs,
      id: 5,
    },
  ]

  return <Options options={options} {...props} />
}

export default GeneralOptions

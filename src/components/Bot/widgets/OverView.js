import Options from './Options'

const GeneralOptions = (props) => {
  const options = [
    {
      name: '人氣店家',
      handler: props.actionProvider?.handleShowCategory,
      id: 1,
    },
    {
      name: '查看人氣商品',
      handler: props.actionProvider?.handleShopNow,
      id: 2,
    },
    {
      name: '註冊會員',
      handler: props.actionProvider?.handleSignup,
      id: 3,
    },
    {
      name: '最新文章',
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

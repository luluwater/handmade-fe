import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const ViewBlog = () => {
  const blogId = 2
  return (
    <>
      {['skin-brighter', 'Secondary'].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          className="mb-2 w-75 mx-auto"
        >
          <Link to={`blog/${blogId}`}>
            <Card.Header className="p-0">
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80"
                alt="new blog"
              />
            </Card.Header>
          </Link>
          <Card.Body className="text-dark">
            <Card.Title className="text-cut-1 fs-4 fw-bold">
              花貓蛋糕實驗室親手做甜點！超人氣海綿生乳捲的美味秘密
            </Card.Title>
            <Card.Text className="text-cut fs-6">
              馬卡龍烘焙師 Pierre Hermé
              對甜食的由衷讚嘆，你也很有共鳴嗎？甜蜜的滋味吃進嘴裡，好像也...
              對甜食的由衷讚嘆，你也很有共鳴嗎？甜蜜的滋味吃進嘴裡，好像也...
              對甜食的由衷讚嘆，你也很有共鳴嗎？甜蜜的滋味吃進嘴裡，好像也...
              對甜食的由衷讚嘆，你也很有共鳴嗎？甜蜜的滋味吃進嘴裡，好像也...
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  )
}

export default ViewBlog

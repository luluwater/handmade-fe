import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import RoomBody from '../RoomBody'
import { useSelector, useDispatch } from 'react-redux'
import ChatToast from '../../UI/ChatToast'
import useSocket from '../../../hooks/socketConnect'

const Chat = () => {
  const dispatch = useDispatch()

  const sliceAuth = useSelector((state) => state.authReducers)
  const userData = JSON.parse(localStorage.getItem('user'))?.user
  useSocket(userData || sliceAuth?.user, dispatch)
  const chatReducer = useSelector((state) => state.chatReducer)
  const welcomeMsg = chatReducer.welcomeMsg
  const friendList = chatReducer.friends

  return (
    <>
      <ChatToast text={welcomeMsg} />
      <Container data-aos="zoom-in-up" data-aos-duration="600" className="my-8">
        <Row>
          <Col className="bg-skin-dark" lg={3}>
            <div className="d-flex align-items-center gap-3 p-1 m-3 bg-skin-brighter">
              <img
                className="chat_avatar rounded-circle"
                src={
                  userData.avatar
                    ? userData.avatar
                    : require('../../../assets/user/profile_2.png')
                }
                alt="user avatar"
              />

              <span>{userData.account}</span>
            </div>
            <div className="p-1 m-3">
              <div className="d-flex align-items-center">
                <h5 className="text-gray-darker m-0">線上成員</h5>
                <div className="chat_amount fs-6 fw-bold ms-2 p-1 bg-dark rounded-circle text-white d-flex justify-content-center align-items-center">
                  {friendList.length}
                </div>
              </div>
              <hr />

              <ListGroup className="d-flex gap-3 rounded-0">
                {friendList?.map((friend) => {
                  return (
                    <ListGroup.Item
                      key={friend.id}
                      className="d-flex align-items-center justify-content-between border-0 "
                      action
                    >
                      <img
                        className="chat_avatar rounded-2"
                        src={
                          friend.avatar
                            ? friend.avatar
                            : require('../../../assets/user/profile_2.png')
                        }
                        alt="friend pic"
                      />
                      <div>{friend.account}</div>
                    </ListGroup.Item>
                  )
                })}
              </ListGroup>
            </div>
          </Col>
          <Col
            className="chat_wrapper bg-skin-bright position-absolute position-md-relative py-3"
            lg={9}
          >
            <RoomBody />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Chat

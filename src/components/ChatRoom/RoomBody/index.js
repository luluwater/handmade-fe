import React from 'react'
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Container } from 'react-bootstrap'
import moment from 'moment/moment'

const RoomBody = ({ data }) => {
  return (
    <>
      {data?.map((currentChat) => {
        return (
          <div key={currentChat.id}>
            <div className="position-relative text-center mt-3 ">
              {/* TODO:大廳畫面要漲怎樣?? */}
              <Link
                to="#"
                className="position-absolute bottom-0 start-0 fs-1 d-md-none"
              >
                <FontAwesomeIcon icon="fa-solid fa-angle-left" />
              </Link>
              <h5>{currentChat?.room_title}</h5>
              <Button
                onClick={() => {}}
                className="position-absolute bottom-0 end-0 d-none d-md-block"
              >
                <FontAwesomeIcon icon="fa-solid fa-door-open" />
                {/* TODO:大廳畫面要漲怎樣?? */}
                <span className="ms-md-2">離開</span>
              </Button>
            </div>
            <hr />

            <ListGroup className="chat_body d-flex flex-column gap-3 my-5">
              {currentChat?.msg.map((m) => {
                return (
                  <div key={m.message_id}>
                    <div className="d-flex align-items-start gap-3">
                      <img
                        className="chat_avatar"
                        src={require('../../../assets/user/profile_2.png')}
                        alt="user avatar"
                      />
                      <ListGroup.Item className="chat_body_text-others w-25 rounded-2 ">
                        {m.content}
                      </ListGroup.Item>
                      <div className="text-muted fs-7 text-center align-self-end">
                        {moment(m.created_at).format('LT')}
                      </div>
                    </div>
                    {/* TODO: SELF SIDE style 判斷訊息使用者的 ID 是否與 SESSION 一致，上下的區分 */}
                    <div className="d-flex align-items-start gap-3 justify-content-end">
                      <div className="text-muted fs-7 text-center align-self-end">
                        {moment(m.created_at).format('LT')}
                      </div>
                      <ListGroup.Item className="chat_body_text-self w-25 rounded-2">
                        {m.content}
                      </ListGroup.Item>{' '}
                      <img
                        className="chat_avatar"
                        src={require('../../../assets/user/profile_2.png')}
                        alt="user avatar"
                      />
                    </div>
                  </div>
                )
              })}
            </ListGroup>
          </div>
        )
      })}
    </>
  )
}

export default RoomBody

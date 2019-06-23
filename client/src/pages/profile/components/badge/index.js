import React from 'react'
import styled from 'styled-components'
import { Age } from 'utils'
import { lighten } from 'polished'
import { getAvatarByName } from 'resources/images/avatars'

const Badge = props => {
  const { user } = props
  const avatar = getAvatarByName(user.avatar)
  const age = Age.getAge(user.createdAt)
  console.log({ user })
  return (
    <Wrapper>
      <div className="avatar">
        <img src={avatar} alt={`${user.forename}'s avatar`} />
      </div>
      <div className="user-information">
        <h1>{`${user.forename} ${user.surname}`}</h1>
        <span className="laAge">{age}</span>
        {/* <p>
          <span>Username:</span>
          {user.username}
        </p>
        <p>
          <span>Email:</span>
          {user.email}
        </p> */}
      </div>
    </Wrapper>
  )
}

export { Badge }

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 12px 8px;
  background-color: ${({ theme }) => theme.white};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  .avatar {
    width: 65px;
    overflow: hidden;
    margin-right: 12px;
  }
  .user-information {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    h1 {
      font-size: 32px;
      font-weight: 400;
      color: ${({ theme }) => theme.text.dark};
      font-family: ${({ theme }) => theme.fontHeading};
    }
    span.laAge {
      font-size: 0.8rem;
      align-self: flex-end;
      color: ${({ theme }) => lighten(0.3, theme.grey)};
      margin-top: 3px;
    }
  }
`

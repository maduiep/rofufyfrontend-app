import React, {useState} from 'react'

import {
    NofitContainer,
    NotifyWrapper,
    NotifyNew,
    NotifyText,
    NotifyIcon,
    Img
} from './NotifyElements'

const Notify = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(isOpen === false ? true : false)
  }
  return (
    <NofitContainer isOpen={isOpen}>
        <NotifyWrapper>
            <NotifyNew>New!</NotifyNew>
            <NotifyText>Announcing our $15 million series A funding!</NotifyText>
            <NotifyIcon toggle={toggle}>
                <Img src="./images/close-icon.svg" onClick={toggle} />
            </NotifyIcon>
        </NotifyWrapper>
    </NofitContainer>
  )
}

export default Notify
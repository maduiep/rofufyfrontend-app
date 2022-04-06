import React from 'react'

import {
    ContactContainer,
    ContactWrapper,
    ContactTextContainer,
    ContactImgContainer,
    ContactTextOne,
    ContactTextTwo,
    ContactLineWrapper,
    LineOneWrapper,
    LineTwoWrapper,
    WhatsApp,
    Email,
    Number,
    EmailAdd,
    Img
} from './ContactElements'

const Contact = () => {
  return (
    <ContactContainer>
        <ContactWrapper>
            <ContactTextContainer>
                <ContactTextOne>Contact Us</ContactTextOne>
                <ContactTextTwo>
                    Got any questions, feedback, request and complains? Reach out...
                </ContactTextTwo>

                <ContactLineWrapper>
                    <LineOneWrapper>
                        <WhatsApp src="./images/whatsapp.svg" />
                        <Number>+2348232323892</Number>
                    </LineOneWrapper>
                    <LineTwoWrapper>
                        <Email src="./images/email.svg"/>
                        <EmailAdd>contact@us.com</EmailAdd>
                    </LineTwoWrapper>
                </ContactLineWrapper>
            </ContactTextContainer>

            <ContactImgContainer>
                <Img src="./images/contact-img.svg" />
            </ContactImgContainer>
        </ContactWrapper>
    </ContactContainer>
  )
}

export default Contact
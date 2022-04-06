import React, {useContext, useEffect} from 'react';
import {AuthContext} from '../../Context/AuthProvider';



import {
    DashHeaderContainer,
    HeaderWrapper,
    Logo,
    HeaderUser,
    Username,
    LogoutBTN
} from './DashHeaderEl'

const DashHeader = () => {
  const {auth, setTheLogout, authValueSaver, authStatusSetter, authStatus} = useContext(AuthContext);
  const userEmail = auth.email;

  useEffect(() => {
    if(authStatus === false){
      window.location.href = '/'
    }
  }, [authStatus])
  
  return (
    <DashHeaderContainer>
        <HeaderWrapper>
            <Logo src="./images/Logo.svg"/>
            <HeaderUser>
                <Username>Hi {userEmail}</Username>
                <LogoutBTN onClick={() => setTheLogout()}>Logout</LogoutBTN>
            </HeaderUser>
        </HeaderWrapper>
    </DashHeaderContainer>
  )
}

export default DashHeader
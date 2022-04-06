import React, {useState, useRef, useEffect, useContext} from 'react'
import {AuthContext} from '../../Context/AuthProvider'
import { Link } from 'react-router-dom'
import { AuthContainer, Button, Form, Img, InputContainerOne, InputContainerTwo, MainContainer, MainText, SidebarContainer } from './AuthMainElements'

import axios from '../../api/axios'
const LOGIN_URL = '/auth/login'

const AuthLogin = () => {
    const {auth, authValueSaver, authStatusSetter, authStatus} = useContext(AuthContext)

    const name = 'Login'
    const emailRef = useRef();
    
    if(authStatus === true){
      window.location.href = '/dashboard'
    }


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    const [errMsg, setErrMsg] = useState('')
    
    useEffect(() => {
      emailRef.current.focus()
    }, []);

    
  
    useEffect(() => {
      setErrMsg('')
    }, [email, password])
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      
      try {
        const response = await axios.post(LOGIN_URL, {email, password})
        .then(function (response) {
          const {token, success} = response.data;

          authValueSaver({email, password, token});
          authStatusSetter();
          setEmail('');
          setPassword('');
          alert(success.response.data.success)
        })
        .catch(function (error) {
          //console.log(error.response.data.Error);
          alert(error.response.data.Error)
        });
        
      }catch(err) {
        if (!err?.response) {
          setErrMsg('No Server Reponse')
        } else if (err.response?.status === 400 ) {
          setErrMsg ('Missing Email or Password')
        } else if(err.response?.status === 4001){
          setErrMsg('Login Failed')
        }
      }
    }

    


  return (
    <AuthContainer>
        <SidebarContainer>
        <Link to="/"><Img src="./images/sidebar.svg" /></Link>
        </SidebarContainer>
        <MainContainer>
            <MainText>{name}</MainText>
           <Form onSubmit={handleSubmit}>
            <InputContainerOne 
            placeholder="Email" 
            type="email" 
            id="email"
            ref={emailRef}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete='off' 
            />
            <InputContainerTwo 
            placeholder="Password" 
            type="password" 
            id="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete='off'
            required
            />
            <Button type="submit">{name}</Button>
           </Form>
        </MainContainer>
    </AuthContainer>
  )
}

export default AuthLogin
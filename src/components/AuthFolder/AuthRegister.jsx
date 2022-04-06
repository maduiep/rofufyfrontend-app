import React, {useState, useRef, useEffect, useContext} from 'react'
import {AuthContext} from '../../Context/AuthProvider'
import { Link } from 'react-router-dom'
import axios from '../../api/axios'
// import {ToastContainer, toast} from 'react-toastify'
import {
    AuthContainer,
    SidebarContainer,
    MainContainer,
    Img,
    MainText,
    InputContainerOne,
    InputContainerTwo,
    Form,
    Button
} from './AuthMainElements'

const REGISTER_URL = '/auth/register'

const AuthRegister = () => {
  const {auth, authStatus, authValueSaver, authStatusSetter} = useContext(AuthContext)
  console.log(auth)
  const name = 'Register'
  const emailRef = useRef()

   
  if(authStatus === true){
    window.location.href = '/dashboard'
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [errMsg, setErrMsg] = useState('')
  
  useEffect(() => {
    emailRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg('')
  }, [email, password])

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log(email, password)
    console.log(errMsg)
    try {
      const response = await axios.post(REGISTER_URL,{email, password}
      ).then(function (response) {
        const {token, success} = response.data;
        authValueSaver({email, password, token});
        authStatusSetter();
        alert(success.response.data.success)
      })
      .catch(function (error) {
        console.log(error);
      });
      console.log(response.data)
      console.log(response.accessToken)
      console.log(JSON.stringify(response))
      
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Reponse')
      } else if (err.response?.status === 409 ) {
        setErrMsg ('Email Registered')
      } else {
        setErrMsg('Registration Failed')
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
           <Form onSubmit={ handleSubmit}>
            <InputContainerOne 
            placeholder="Email" 
            type="email" 
            id="email"
            ref={emailRef}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete='off'
            />

            <InputContainerTwo 
            placeholder="Password" 
            type="password" 
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete='off'
            />
            <Button type="submit">{name}</Button>
           </Form>
           {/* <ToastContainer /> */}
        </MainContainer>
    </AuthContainer>
  )
}

export default AuthRegister
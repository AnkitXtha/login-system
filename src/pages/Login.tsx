
import { FormEvent, useEffect, useState } from 'react'
import '../App.css'
import { Link, useNavigate } from 'react-router-dom';
import { useLoginCallMutation } from '../redux/api';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/loginSlice';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, {isLoading, data: userData,}]: any = useLoginCallMutation();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {token} = useSelector((state: any) => state.user)

    const loginHandle = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const userCredentials = {
        email,
        password
      }
      await login(userCredentials)
      
    }

    useEffect(() => {
      if(token){
        navigate('/home')
      }
    })

    useEffect(() => {
      if(userData?.data){
        setEmail('')
        setPassword('')
        dispatch(setUser({name: userData?.data.Name, token: userData?.data.Token, email: userData?.data.Email, id: userData?.data.Id}))
        navigate('/home')
      }
    }, [userData?.data])
  return (
    <>
    <div className="login-container">
        <h2>Login</h2>
        <form className="login-form" action="#" method="post" onSubmit={loginHandle}>
            <div className="form-group">
                <label htmlFor="username">Email:</label>
                <input type="text" id="username" name="username" value={email} onChange={(e: any) => setEmail(e.target.value)} required />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={password} onChange={(e: any) => setPassword(e.target.value)} required />
            </div>

            <div className="form-group">
                <input type="submit" value={isLoading == false? "Login" : "Logining..."} />
            </div>
        </form>
    </div>
    </>
  )
}

export default Login

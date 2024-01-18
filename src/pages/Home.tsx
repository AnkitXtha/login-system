
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/loginSlice";
import { useEffect } from "react";
import { useGetUserQuery } from "../redux/api";

function Home() {
 
    const navigate = useNavigate()
    const {token} = useSelector((state: any) => state.user)
    const dispatch = useDispatch()  
    
    const {data} = useGetUserQuery('');

    const logoutHandle = () => {
        dispatch(logout())
        navigate('/')
    }

    useEffect(() => {
        if(!token){
            navigate('/')
        }
    })
    
  return (
    <>
    <div>
        <h1>{data?.name}</h1>
        <h6>{data?.email}</h6>
        <p>{data?.id}</p>
        <p>{data?.location}</p>
    </div>
    <div>
        <button onClick={logoutHandle}>Logout</button>
    </div>
    </>
  )
}

export default Home

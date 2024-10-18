import TextField from "../components/TextField"
import Button from '../components/Button'
import { useState } from "react"
import axios from "axios"

const Signup = () => {
    const [user,setUser] = useState({
        username: "",
        password: ""
    })

    const inputChangeHandler = (e) => {
        setUser((prev)=> ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const signupHandler = async () => {
        const headers = {
            'Content-Type': "application/json"
        }
        const res = await axios.get("http://localhost:8000/api/sign-in",user,{headers});
        console.log(res)
    }

  return (
    <div className="flex flex-col justify-center items-center gap-6 h-[100vh]">
        <TextField label={"Username"} value={user.username} name={"username"} onChange={inputChangeHandler}/>
        <TextField label={"Password"} value={user.password} name={"password"} onChange={inputChangeHandler}/>
        <Button onClick={signupHandler}>Sign up</Button>
    </div>
  )
}

export default Signup
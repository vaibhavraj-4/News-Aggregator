import React, { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom';
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/firebase';
import './SignIn.scss'
import Navbar from '../../Components/Navbar/Navbar';
import { toast } from 'react-toastify';

const SignIn = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState({
    email: "",
    password: ""
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (values.name==="" || values.email==="" || values.pass==="") {
      setErrorMsg("Please fill all fields");
      return;
    }
    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.password)
    .then(async(res) => {
      toast.success("Login Successfully") 
        setSubmitButtonDisabled(false);
        navigate("/")
      }).catch((err)=>{
        setSubmitButtonDisabled(false);
        toast.warning("Something Went wrong");
      })
  }
  return (
    <>
    <Navbar/>
    <div className='login'>
    <div className="card">
      <div className="left">
        <h1>News Today</h1>
        <p>Login and Read your News by your prefferece</p>
        <span style={{fontWeight : "bold"}}>Don't have an account?</span>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
      <div className="right">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input type="email"
            placeholder='email'
            onChange={(e) => setValues((prev) => ({ ...prev, email: e.target.value }))}
            // value={localStorage.getItem("username")}
          />
          <input type="password"
            placeholder='password'
            onChange={(e) => setValues((prev) => ({ ...prev, password: e.target.value }))}
          />
          <b>{errorMsg}</b>
          <button type="submit" disabled={submitButtonDisabled}>Login</button>
        </form>
      </div>
    </div>
  </div>
  </>
  )
}

export default SignIn
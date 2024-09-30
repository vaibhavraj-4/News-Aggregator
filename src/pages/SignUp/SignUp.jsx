import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './SignUp.scss'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../../firebase/firebase';
import Navbar from '../../Components/Navbar/Navbar';
import { toast } from 'react-toastify';


const SignUp = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(values)
    if (values?.name ==="" || !values?.email==="" || !values?.pass==="") {
      setErrorMsg("Please Fill all The fields");
      return;
    }
    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values?.email, values?.password)
    .then(async(res) => {
      toast.success("Register Successfully") 
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName : values.name
        });
        navigate("/")
      }).catch((err)=>{
        setSubmitButtonDisabled(false);
        toast.warning("Something Went wrong");
      });
  }
  return (
    <>
    <Navbar/>
    <div className='register'>
      <div className="card">
        <div className="left">
          <h1>News Today</h1>
          <p> News today is News website that help you to Read The News in a more Effective way.</p>
          <span style={{ fontWeight: "bold" }}>Already have an account?</span>
          <Link to='/login'>
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Name'
              onChange={(e) => setValues((prev) => ({ ...prev, name: e.target.value }))} />
            <input type="email" placeholder='Email'
              onChange={(e) => setValues((prev) => ({ ...prev, email: e.target.value }))} />
            <input type="password" placeholder='password'
              onChange={(e) => setValues((prev) => ({ ...prev, password: e.target.value }))} />
            <b style={{color : "crimson", fontFamily : ""}}>{errorMsg}</b>
            <button disabled={submitButtonDisabled}>Register</button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default SignUp
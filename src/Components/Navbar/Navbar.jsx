import React, { useEffect, useState } from 'react'
import './Navbar.scss';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import pfimg from '../../images/blank.png';
import { signOut } from "firebase/auth";
import { toast } from 'react-toastify';

const Navbar = () => {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName(null);
    });
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      toast.success("Logout Successfully") 
      setUserName(null)
    }).catch((err) => {
      console.log(err)
    })
  }



  return (
    <div className='navbar'>
      <div className="left">
        <Link to={"/"} className='link'>
          <h1>NEWS  TODAY</h1>
        </Link>
      </div>
      <div className="center">
        <Link to={"/"} className='link'>
          <p>Home</p>

        </Link>
        <Link className='link' to={`/categories/sports`}>
          <p>Sports</p>
        </Link>
        <Link className='link' to={`/categories/business`}>

          <p>Business</p>
        </Link>
        <Link className='link' to={`/categories/entertainment`}>
          <p >Entertainment</p>
        </Link>
        <Link className='link' to={`/faviourites`}>

          <p>Faviourites</p>
        </Link>

      </div>
      <div className="right">
        {userName === null ?
          <><Link to={`/register`} className='link'>
            <button className='signupbutton'>SignUp</button>
          </Link>

            <Link to={"/login"} className='link'>
              <button className='navbarlogin'>Login</button>
            </Link></>
          : (<div className='userdetails'>
            <img src={pfimg} alt="" />
            <h2>
              {userName?.charAt(0).toUpperCase() + userName.slice(1)}
            </h2>
            <button onClick={handleLogout}>Logout</button>
          </div>)}
      </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import { useSelector } from 'react-redux'
import News from '../News/News';
import './Faviourites.scss'



const Faviourites = () => {
  const data = useSelector(state => state.faviourite.fav);


  return (
    <div className='Faviourites'>
      <h2 className='catNewsHeading'>The Faviourites</h2>
      {(data?.map((item, index) => (
        <News key={index} item={item} hideFav= {"hide"}/>
      ))) }
      <div className="catNewsloadmorebuttoncontainer">
       { data.length <= 0 && <h1 style={{color : "crimson"}}>Your List is Empty </h1>}
      </div>
    </div>
  )
}

export default Faviourites
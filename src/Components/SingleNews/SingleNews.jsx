import React, { useEffect, useState } from 'react'
import './SingleNews.scss'
import { Link } from 'react-router-dom';
import ShareButtons from '../ShareButton';

const SingleNews = () => {
  const [item, setItem] = useState();

  useEffect(() => {
    const data = localStorage.getItem("item");
    setItem(JSON.parse(data));
  }, [])
  return (
    <div className='SingleNews'>

      <div className='SingleNewsContainer'>
        <img src={item?.urlToImage === null ? "https://cdn.pixabay.com/photo/2016/10/09/08/32/digital-marketing-1725340_1280.jpg" : item?.urlToImage} alt="" />
        <div className="singleNewsContent">
          <h2>{item?.title}</h2>
          <p>{item?.content}</p>
          <div className='authorandTime'>
        <h4>{item?.author}</h4> <span>{new Date(item?.publishedAt).toDateString()}</span>
       {item?.url &&  <ShareButtons url={item.url}/>}
          </div>
          <Link to={item?.url}>
        <button>Read Full Article</button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default SingleNews
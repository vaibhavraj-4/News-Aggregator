import React from 'react'
import './News.scss'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToFavList, resetCart, removeFavItem } from '../../redux/newsReducer'
import { toast } from 'react-toastify';
import ShareButtons from '../ShareButton';

const News = ({ item, hideFav }) => {
  const dispatch = useDispatch();
  const addToFav = () => {
    dispatch(addToFavList(item));
  }

  const removeFromFav = () => {
    dispatch(removeFavItem(item));
  };

  const addToLocalSoterage = (item) => {
    localStorage.removeItem("item");
    localStorage.setItem("item", JSON.stringify(item));
  }

  console.log(item)
  return (
    <div className='News'>
      <img src={item?.urlToImage === null ? "https://cdn.pixabay.com/photo/2016/10/09/08/32/digital-marketing-1725340_1280.jpg" : item?.urlToImage} alt="" />
      <div className="NewsContent">
        <h2>{item?.title}</h2>
        <p>{item?.content?.substring(0, 200)}</p>
        <div className="NewsDetails">
          <Link to={`/singlenews/${JSON.stringify(item?.title)}`} onClick={() => addToLocalSoterage(item)}>
            <button>readMore</button>
          </Link>
          <p>{new Date(item?.publishedAt).toDateString()}</p>
          <p>{item?.author === null ? "Unknown" : item?.author}</p>
          {hideFav === undefined ? <button onClick={addToFav}>AddFav+</button> :
            <button onClick={() => removeFromFav(item?.title)}>Remove</button>}

        </div>
            <ShareButtons url={item.url}/>
      </div>
    </div>
  )
}

export default News
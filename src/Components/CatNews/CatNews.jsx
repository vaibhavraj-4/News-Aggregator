import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import News from '../News/News'
import './CatNews.scss'

const CatNews = () => {
    const [page, setPage] = useState(10);
    const [data, setData] = useState([])
    const { cat } = useParams();

    useEffect(() => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${cat}&apiKey=ea5917d0cd47457cba5c934abe3db484&pageSize=${page}`;
        const fetchTheUrl = async () => {
            const res = await fetch(url);
            const data = await res.json();
            setData(data);
        }
        fetchTheUrl()
    }, [cat, page]);
    const handleLoadMore = () => {
        setPage(prevState => prevState + 5);
    }


    return (
        <div className='catNews'>
            <h2 className='catNewsHeading'>The {cat}</h2>
            {data?.articles?.map((item, index) => (
                <News key={index} item={item} />
            ))}
            <div className="catNewsloadmorebuttoncontainer">
                <button onClick={handleLoadMore}>LoadMore</button>
            </div>
        </div>
    )
}

export default CatNews
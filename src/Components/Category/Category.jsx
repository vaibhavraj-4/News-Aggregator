import React from 'react'
import './Category.scss'
import { Link } from 'react-router-dom'
const Category = () => {
    const data = [
        {
            title: "Health",
            imgUrl: "https://cdn.pixabay.com/photo/2017/04/22/10/15/woman-2250970_640.jpg",
            content: "Global Family Travels Climate Health"
        },
        {
            title: "Sports",
            imgUrl: "https://cdn.pixabay.com/photo/2012/11/28/11/11/football-67701_1280.jpg",
            content: "Read All the Sports News"
        },
        {
            title: "Entertainment",
            imgUrl: "https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_1280.jpg",
            content: "Read All the Entertainment News"
        },
        {
            title: "Business",
            imgUrl: "https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_640.jpg",
            content: "Read All the Business News"
        },
        {
            title: "Science",
            imgUrl: "https://cdn.pixabay.com/photo/2019/10/25/06/07/sky-4576072_640.jpg",
            content: "Read All the Science News"
        },

    ]
    return (
        <div className='category'>
            <div className="categoryTop">
                <h3>Featured Categories</h3>
            </div>
            <div className="categoryBottom">
                {data.map((item, index) => (
                    <div className='singleCat' key={index}>
                        <Link to={`/categories/${item.title.toLowerCase()}`} className='link'>
                            <img src={item.imgUrl} alt="" />
                            <p>{item.title}</p>
                            <h2>{item.content}</h2>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Category
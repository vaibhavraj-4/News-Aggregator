import React, { useEffect, useState } from "react";
import "./AllNews.scss";
import News from "../News/News";

const AllNews = () => {
  const [page, setPage] = useState(10);
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [sortOrder, setSortOrder] = useState("desc"); // 'asc' for ascending, 'desc' for descending

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${"business"}&apiKey=9513c0b4d5dd47d5bbf5fbf8afe5b8b7&pageSize=${page}`;

    const fetchTheUrl = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setData(data.articles || []); // Assuming articles are directly in the data
    };
    fetchTheUrl();
  }, [page]);

  useEffect(() => {
    const sortArticlesByDate = (articles, order) => {
      return articles.sort((a, b) => {
        const dateA = new Date(a.publishedAt);
        const dateB = new Date(b.publishedAt);
        return order === "asc" ? dateA - dateB : dateB - dateA; // Sort based on order
      });
    };

    setSortedData(sortArticlesByDate(data, sortOrder));
  }, [data, sortOrder]);

  const handleLoadMore = () => {
    setPage((prevState) => prevState + 5);
  };

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc")); // Toggle between New and old
  };

  return (
    <div className="AllNews">
      <h2 className="latesth2">The Latest</h2>
      <button className="sortButton" onClick={toggleSortOrder}>
        Sort by Date: {sortOrder === "asc" ? "New" : "Old"}
      </button>
      {sortedData?.map((item, index) => (
        <News key={index} item={item} />
      ))}
      <div className="loadmorebuttoncontainer">
        <button className="loadmorebutton" onClick={handleLoadMore}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default AllNews;

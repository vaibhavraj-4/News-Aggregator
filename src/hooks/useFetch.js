import { useEffect, useState } from "react";


const useFetch = (page, category) => {
    const [cat, setCat] = useState(category===undefined? "business" : category);

    const [data, setData] = useState();
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${cat}&apiKey=ea5917d0cd47457cba5c934abe3db484&pageSize=${page}`;

    useEffect(() => {
        const fetchTheUrl = async () => {
            const res = await fetch(url);
            const data = await res.json();
            setData(data);
        }
        fetchTheUrl()
    }, [cat]);

    return(data);
}
export default useFetch;
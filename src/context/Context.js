import React, { useEffect, useState } from "react";
import axios from 'axios';
import { createContext } from "react";

export const Context = createContext(null)

const ContextProvider = ({ children}) =>{
    
    const[news, setNews] = useState([]);
    const[style,setStyle] = useState(true);
    const[search, setSearch] = useState('')
    
    useEffect(()=>{
        const key = '6dbb2b7cebf84b889c131d0df72ff13d'
        const loadnews1 = async ()=>{
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${key}`)
        let data = response.data.articles
        console.log(data)
        setNews(data)
        }
        loadnews1();
    },[])

    return(
        <Context.Provider value={{search, setSearch, style, setStyle, news, setNews }}>
            {children}
        </Context.Provider>
    );
}

export default ContextProvider;
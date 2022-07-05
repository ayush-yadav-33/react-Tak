import React,{useContext} from 'react'
import './News.css'
import { Context } from '../../context/Context';
import Categories from './category/Categories';
import SearchBar from '../Panel/searchbar/SearchBar';
import Navbar from '../Navbar/Navbar';


export default function NewsList() {
   
    const {search, style, news} = useContext(Context)


  const onCardClick = (i)=>{
    console.log("data", i)

  }
  
  return (
    <div className='newslist'>
      <Navbar />
        {/* <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
            stroke="#657789" className="feather feather-search">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </span> */}
        {/* <SearchBar /> */}
      <Categories />
        <div className={style?'newsContainer':'newsContainer2'}>
        {
          news ?  news.filter( val =>{
            if( search === "" ){
              return val;
            } else if (val.title.toLowerCase().includes(search.toLowerCase())){
              return val
            }
          }).map((data, i) =>
                  <div key={i} className={style?'newsCard':'newsCard2'} onClick={()=>{onCardClick(i)}}>
                    <a style={{textDecoration:"none"}} href={data.url}>
                      <div className='title'>{data.title}</div>                 
                      <div style={{marginTop:"auto"}}>
                      <div style={{display:"flex",marginTop:"auto"}}>
                        <p className='NewsDT' >{data.author}</p>
                        <p className='NewsDT' >---{data.publishedAt}</p>
                      </div>
                        <img className={style?'Newsimage':'Newsimage2'}alt="" src={data.urlToImage} />
                      </div>  
                    </a>  
                  </div>               
            )
            : <p>Loading...</p>
        }   
        </div>
       
    </div>
  )
}

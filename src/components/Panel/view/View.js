import React, { useContext } from 'react'
import ArticleIcon from '@mui/icons-material/Article';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Context } from '../../../context/Context';


export default function View() {

  const{setStyle}= useContext(Context)

  const changeStyles = () =>{
    setStyle(true)
    document.querySelector('.view1').style.backgroundColor='#98EEC8';
    document.querySelector('.view2').style.backgroundColor='#DAE2EA';
  }
  const changeStyles2 = () =>{
    setStyle(false)
    document.querySelector('.view2').style.backgroundColor='#98EEC8';
    document.querySelector('.view1').style.backgroundColor='#DAE2EA';
  }

  return (
    <div className='content'>
        <div className='smallContainer'><p>View Toggle</p></div>
        <div className='viewContainer'>
          <div className='view1'>
            <ArticleIcon style={{fontSize:"3.5em",padding:"0 1rem"}} onClick={changeStyles}/>
          </div>
          <div className='view2'>
            <FormatListBulletedIcon style={{fontSize:"3.5em",padding:"0 1rem"}} onClick={changeStyles2}/>
          </div>
        </div>        
    </div>
  )
}

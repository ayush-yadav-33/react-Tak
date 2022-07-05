import React,{ useState, useContext} from 'react';
import { Context } from '../../context/Context'
import './nav.css'

export default function Navbar(){
     const [sideitem, setSideitem] = useState(true);
  const { setSearch, search } = useContext(Context);


     const Onsideitem = () =>{
          setSideitem(!sideitem)
     }
     const onSearchChange = (e) => {
          setSearch(e.target.value);
        }

     return (
               <div className="navlink">
                    <div className="logo">
                         <a href="0" className="no-underline white">MLRL</a>
                    </div>
                    <div className='nav__search'>
                         <div className="mobile__InputContainer">
                         <input onChange={(e) => onSearchChange(e)} placeholder="Search a news..." type="text" />
                    </div>
                    </div>            
                    <div className="itemlink" >
                         <a href="0"><button className="navContent">Home</button></a>
                         <a href="0"><button className="navContent">About</button></a>
                         <a href="0"><button className="navContent">Membership</button></a>
                         <a href="0"><button className="navContent">Contact Us</button></a>                              
                    </div>
                    {
                         sideitem?
                    <div className="menu_bars">
                         <button onClick={Onsideitem} hred="0" className="sidebar">
                              <span className="Bar"></span>
                              <span className="Bar"></span>
                              <span className="Bar"></span>
                         </button>
                    </div>
                    :
                    <div className="slidesidebar">
                         <button onClick={Onsideitem} className="sidebar">
                         <span className="Bar"></span>
                         <span className="Bar"></span>
                         <span className="Bar"></span>
                    </button>
                    <div className="sideitembox">
                       <a href="0" className="no-underline"><button className="sidenavContent ">Home</button></a>
                       <a href="0" className="no-underline"><button className="sidenavContent">About</button></a>
                       <a href="0"className="no-underline"><button className="sidenavContent">Membership</button></a>
                       <a href="0" className="no-underline"><button className="sidenavContent">Contact Us</button></a>                              
                    </div>
               </div>
                    
                    }
               </div>
     )
}
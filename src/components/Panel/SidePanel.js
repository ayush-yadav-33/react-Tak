import React from 'react'
import Feedback from './feedback/Feedback'
import SearchBar from './searchbar/SearchBar'
import './SidePanel.css'
import View from './view/View'

export default function SidePanel() {
  return (
    <div className="SidePanelContainer">
        <div className='SidePanel__Container'>
            <div className='content'>
                <p style={{fontWeight:"600"}}>Hi Reader</p>
                <p>Here's your news</p>
            </div>    
            <View/>
            <Feedback />
            <SearchBar />
        </div>
    </div>
  )
}

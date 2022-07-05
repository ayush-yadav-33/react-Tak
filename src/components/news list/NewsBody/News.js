import React from 'react'

export default function News({ title, body }) {
  return (
    <div className='newsDetail'>
      <div>
        <h1 style={{color:"green",borderBottom:"2px solid orange"}}>{title}</h1>
      </div>
      <div>
        <p style={{padding:"1rem 0 0 0"}}>{body}</p>
      </div>
    </div>
  )
}

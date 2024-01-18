import React, { useState } from 'react'

const TourCom = ({image,title,content, id,handleClick}) => {
    const [readMore,setreadMore] = useState(false);
  return (
<div key={id} className="single-box">
    <img src={image} alt="paris" />
    <h4>{title}</h4>
    <p>{readMore?content:`${content.substring(0,220)}...`}
    <button type='button' className='info-btn' onClick={()=>setreadMore(!readMore)}>{readMore?"Show less":"read More"}</button>
    </p>
    <span className="price">1295$</span>
    <button className="btn" onClick={()=>handleClick(id)}>Not Intrested</button>
  </div>
  )
}

export default TourCom
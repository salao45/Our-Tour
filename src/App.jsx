import React, { useEffect, useState } from "react";
import { tourData } from "./component/data";
import TourCom from "./component/tour";
const App = () => {
  const [tour, setTour] = useState(tourData)
  const handleClick = (id)=>{
        const newArray = tour.filter((city)=>city.id !== id);
        setTour(newArray)
  }
  
  if(tour.length===0){
    return <div className="center">
      <h1 className="noTour">No tours left</h1>
      <button onClick={()=>setTour(tourData)} className="dlt-btn">refresh</button>
    </div>
  }
  
  return (
    <main>
      <div className="heading"><h1>Our Tour</h1>
      
      <div className="line"></div>
      </div>
      
      { 
        <div className="container">
          { tour.map((city) => {
            const { image, title, content, id } = city;
            return (
             <TourCom image ={image} title={title} content={content} id={id} handleClick={handleClick}/>
            );
          })}
        </div>
      }
      
    </main>
  );
  
};

export default App;

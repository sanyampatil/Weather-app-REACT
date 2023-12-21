import React from 'react'

const Card = () => {
  return (

   <>
   <article className="widget">
     <div className="weatherIcon">
       <i className={"wi wi-day-sunny"}></i>
     </div>

     <div className="weatherInfo">
       <div className="temperature">
         <span>10.3&deg;</span>
       </div>

       <div className="description">
         <div className="weatherCondition"></div>
         <div className="place">
     
         </div>
       </div>
     </div>

     <div className="date"> {new Date().toLocaleString()} </div>

     
     <div className="extra-temp">
       <div className="temp-info-minmax">
         <div className="two-sided-section">
           <p>
             <i className={"wi wi-sunset"}></i>
           </p>
           <p className="extra-info-leftside">
             PM <br />
             Sunset
           </p>
         </div>

         <div className="two-sided-section">
           <p>
             <i className={"wi wi-humidity"}></i>
           </p>
           <p className="extra-info-leftside">
             <br />
             Humidity
           </p>
         </div>
       </div>

       <div className="weather-extra-info">
         <div className="two-sided-section">
           <p>
             <i className={"wi wi-rain"}></i>
           </p>
           <p className="extra-info-leftside">
              <br />
             Pressure
           </p>
         </div>

         <div className="two-sided-section">
           <p>
             <i className={"wi wi-strong-wind"}></i>
           </p>
           <p className="extra-info-leftside">
               <br />
             Speed
           </p>
         </div>
       </div>
     </div>
   </article>
 </>

  )
}

export default Card;
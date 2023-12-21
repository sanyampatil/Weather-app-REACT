import { useEffect,useState } from "react";
import Card from "./Card,";
import "./app.css";
 



const PageMain = () => {
  
  const [searhValue, setsearhValue] = useState("pune")

  const getWeatherInfo = async()=>{
    try {
      let url="https://api.openweathermap.org/data/2.5/weather?q=pune&appid=1a3faabe11a9940b58de51e628d7264c"
       const res = await fetch(url)

       const  data = await res.json();
       console.log(data)
    } catch (error) {
      
    }
  }  


  useEffect(()=>{
    getWeatherInfo();
  },[])
  return (
  <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            value={searhValue}
            onChange={(e)=> setsearhValue=e.target.value}



            autoFocus
            id="search"
            className="searchTerm"
            
           
          />

          <button
            className="searchButton"
            type="button"
           >
            Search
          </button>
        </div>
      </div>
      
      
      {/* <Card/> */}
      </>
  );
};

export default PageMain;
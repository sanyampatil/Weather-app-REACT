import Card from "./Card,";
import "./app.css";

const PageMain = () => {


  return (
  
  <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
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
      
      
      <Card/>
      </>
  );
};

export default PageMain;
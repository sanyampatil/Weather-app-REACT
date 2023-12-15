import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [mydata, setMydata] = useState([])
  // const [myid, setMyid] = useState()
  // const [mysetadvice, setAdvice] = useState()


  useEffect(()=>{
    axios.get("https://api.adviceslip.com/advice")
    .then((res)=>
    {

      
      
      // console.log(res.data.slip.id)
      setMydata=res.data.slip
    }
    
    
    )
    
  })

  // function clickChange(){
  //   const {id,advice} =mydata;
  //   setMyid=id;
  //   setAdvice=advice;





  // }
  // clickChange()

  return (
<>
  <h1>hii react</h1>
  {/* <button onClick={clickChange}>click</button> */}
  {/* <h1>{myid}</h1>
  <h1>{mysetadvice}</h1> */}

  {
    mydata.filter((temp)=>{
      const {ido,advice} = temp
      if(ido=="id" && advice=="advice")
      {

    <div>
    <h1>
    {id}

    </h1>
    </div>
      }
    })
  }

   

</>
     
  )
}

export default App

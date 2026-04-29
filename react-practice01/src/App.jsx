import { useState } from "react";

function Child({click}){
  return <div>{click}</div>
}
function MyBtn(){
  const [clicks, setClicks] = useState(0);
  const handleClick = ()=>{
    setClicks(clicks+1)
    console.log(clicks);
    
  }
  
  return(
    <>
    <button onClick={handleClick}>點擊次數：{clicks}</button>
    <Child click={clicks}/>
    </>
  ) 
}

function App() {
  
  return(
    <>
    <MyBtn/>
    </>
  ) 
  
}

export default App

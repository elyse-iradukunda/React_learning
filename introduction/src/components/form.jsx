
import { useState  } from "react"
function Form(){

    const [count,setCount] = useState(0);
    return(
    <>
    <h1>Learning Hooks</h1>
           <p>up!:{count} </p>
           <button onClick={()=>setCount(count +1)}>up</button>
   
    </>)
}

export default Form
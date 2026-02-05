  import { useState } from "react";

  function Form(){
   const [count,setCount] = useState(0);
   return(
    <div>
         <p>Here is: {count}</p>
         <button onClick={()=> setCount(count+1)} >Up!`</button>
    </div>
   )

  }
  export default Form;
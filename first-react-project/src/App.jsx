
import { useState } from "react";
import { Courses } from "./Courses"
import Greeter from "./Greeter";
import { Header } from "./Header"

// root component

function App(){
  const[course,setCourse]=useState('')
  return  (
    <>
  
 <Header cname = "Kesava Tech Academy" ></Header>
       <select name="search" onChange={(e)=>setCourse(e.target.value)}>
        <option value="backend">Backend</option>
        <option value="frontend">Frontend</option>
      </select>
      

<Courses ctype={course}></Courses>
<Greeter></Greeter>
  </>
  );
}

export default App;
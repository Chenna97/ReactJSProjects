import React, { useState } from 'react'

const Greeter = ()=>{
    const[username,setusername] = useState('Kesava')
    const showMsg =()=>{
        alert('Great Day');
    }
    return(
<>
<h1>Welcome {username}</h1>
<input type="text" name="choice" value={username} onChange={(e)=>
   {
    setusername(e.target.value);
   console.log(e.target.value)
}
}>
</input>
<button onClick={()=>showMsg()}>
ShowMessage
</button>

</>
    )
}

export default Greeter 
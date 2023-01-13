import React, { useState } from 'react'

export default function Todo() {

    const [name,setName] = useState('');
    const [todo,setTodo] = useState([])
    const [isEditItem,setIsEditItema] = useState(null);

    const handlechange = (e) =>{
        setName(e.target.value)
    }

    const handlesubmit = (e) =>{
         setTodo([...todo,name])
        console.log(todo);
    }

    function deleteitem(i){
        const final  = todo.filter((elm,id)=>{
            return i!=id;
        })
        setTodo(final)
    }

    const handleedit = (i)=>{
        const edititem  = todo.find((elm,id)=>{
            return i == id;
        })
        console.log(edititem);
        setName(edititem)
        setIsEditItema(i)
    }

    return (
    <div>
        <input type="text "  onChange={handlechange} value={name} />
        <button  onClick={handlesubmit}>Submit</button>
        {
            todo.length > 0 && todo.map((item,i)=>{
                return(
                    <p key={i}>
                        <div>
                            <h6>{item}</h6>
                            <button onClick={()=>deleteitem(i)}>Delete</button>
                            <button onClick={()=>handleedit(i)}>Edit</button>
                        </div>
                    </p>
                  
                )
            })
        }
    </div>

  )
}

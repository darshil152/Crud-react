import React, { useState } from 'react'

export default function View() {

   
    const [abc, setAbc] = useState(JSON.parse(localStorage.getItem('save')));



    const deleteid = (data) =>{
        console.log("i",data)
        const filteredPeople = abc.filter((abc =>abc.id !== data));
        setAbc(filteredPeople)
        localStorage.setItem("save", JSON.stringify(filteredPeople));
        console.log(filteredPeople)
    }


    const editid = (data) => {
        window.location.href = '/' + data;
    }
      
    return (

        <>
            <div>
                {
                    abc.length > 0 && abc.map((items) => {
                        return(
                        <div>
                        <h1> {items.name}</h1>
                        <h1> {items.id}</h1>

                          <button onClick={()=>deleteid(items.id)}>delete</button>
                         <button onClick={()=>editid(items.id)}>Edit</button> 
                        </div>
                        )
                    })
                }
            </div>
        </>
    )
}

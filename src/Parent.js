import React from 'react'
import Child from './Child'

export default function Parent() {
    const childtoparent = () =>{
        alert('this is from child component')
      }
  return (

    <div>
        <Child  childtoparent={childtoparent}/>
    </div>
  )
}

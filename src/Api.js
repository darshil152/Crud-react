import React, { useState } from 'react'

export default function Api() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [users, setUsers] = useState([])

    const updateUser = () => {
        let items = { name, email, mobile }
        console.warn(items)

        fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
            result.json().then((resp) => {
              // console.warn(resp)
              setUsers(resp)
              setName(resp[0].name)
              setMobile(resp[0].mobile)
              setEmail(resp[0].email)
            })
          })

        }

    return (
        <>
        <div>
            {
                users.map((items,i)=>{
                    return(
                        <div>
                          <h1>{items.email}</h1>
                         </div>
                    )
                })
            }
        </div>

            <div>
                Name:<input type="text" value={name} onChange={(e) => { setName(e.target.value) }} /> <br /><br />
                Email:<input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} /> <br /><br />
                Ph-no:<input type="text" value={mobile} onChange={(e) => { setMobile(e.target.value) }} /> <br /><br />
                <button onClick={updateUser} >Update User</button>
            </div>
        </>

        )
    }

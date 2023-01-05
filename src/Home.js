import React, { useState, useEffect } from 'react'


let array = [];
let count = 0

export default function Home() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [savedata, setSaveata] = useState()
    const [id, setID] = useState('')
    const [ids, setIds] = useState('')
    const [currentdata, setCurrentdata] = useState('')
    const [xyz, setXyz] = useState('')


    useEffect(() => {
        count++
        if (count == 1) {
            const newregister = JSON.parse(localStorage.getItem('save'));
            console.log(newregister)
            if (newregister) {
                array = newregister
                setSaveata(array)
            }
        }
    }, []);

    useEffect(() => {
        let url = window.location.href;
        let getid = url.substring(url.lastIndexOf('/') + 1);
        // console.log(ids)/
        setIds(getid)

        let olddata = localStorage.getItem("save") ? JSON.parse(localStorage.getItem('save')) : []
        let currentdata = '';

        for (let i = 0; i < olddata.length; i++) {
            if (olddata[i].id == getid) {
                currentdata = olddata[i];
                if (olddata[i].gender)
                    console.log(currentdata)
                setXyz(currentdata)
            }
            // setCurrentdata({currentdata, productname:currentdata.productname})
        }
    })



    let namechange = (e) => {
        setName(e.target.value);
        setID(Date.now())
    }

    let emailchange = (e) => {
        setEmail(e.target.value)
    }
    const savedataa = { name: name, id: id, email: email }

    let getvalue = (e) => {   
        let olddata = localStorage.getItem("save") ? JSON.parse(localStorage.getItem('save')) : []



        // if (xyz == "") {
        //     array.push(savedataa)
        //     setSaveata(array)
        //     localStorage.setItem('save', JSON.stringify(array))
        // } else{
        //     const index = olddata.findIndex((obj=> obj.id == getid))
        //     array[index].name = name
        //     array[index].email = email
        //     localStorage.setItem('save',JSON.stringify(array))
        //     console.log('match');
        // }
    }

    return (
        <div>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" defaultValue={xyz.name} onChange={namechange} />
                </label>
                <label>
                    email:
                    <input type="text" name="email" defaultValue={xyz.email} onChange={emailchange} />
                </label>
                <input type="submit" value="Submit" onClick={getvalue} />
            </form>
        </div>
    )
}

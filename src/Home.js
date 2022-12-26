import React, { useState, useEffect } from 'react'


let array = [];
let count = 0

export default function Home() {
    const [name, setName] = useState('')
    const [savedata, setSaveata] = useState()
    const [id,setID] = useState('')
    const [ids,setIds] = useState('')
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
        let ids = url.substring(url.lastIndexOf('/') + 1);
        console.log(ids)
        setIds(ids)
    
        let olddata = localStorage.getItem("save") ? JSON.parse(localStorage.getItem('save')) : []
        let currentdata = '';
    
        for (let i = 0; i < olddata.length; i++) {
          if (olddata[i].id == ids) {
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

    const savedataa = {name:name, id:id}

    let getvalue = (e) => {

        let objIndex = array.findIndex((obj => obj.id == id));
        array[objIndex].name = setName

        array.push(savedataa)
        setSaveata(array)
        localStorage.setItem('save', JSON.stringify(array))
    }

    return (
        <div>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" defaultValue={xyz.name} onChange={namechange} />
                </label>
                <input type="submit" value="Submit" onClick={getvalue} />
            </form>
        </div>
    )
}

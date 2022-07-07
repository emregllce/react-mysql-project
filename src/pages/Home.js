import React, { useEffect, useState } from 'react'
import "./Home.css"
import axios from "axios"
import { Link } from 'react-router-dom';

const Home = () => {

const [data, setData] = useState([]);

const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/get");
    setData(response.data)
};

const deleteContact = (id) => {
    axios.delete(`http://localhost:5000/api/remove/${id}`)
    loadData()
}

useEffect(() => {
   loadData()
}, [data]);

  return (
    <div>
        <Link to = "/addContact">
        <button>Add New</button>
        </Link>
       {data.map((item) =>{
        return(
            <div key = {item.id}>
                <h2>{item.id}</h2>
                <h2>{item.name}</h2>
                <p>{item.email}</p>
                <h2>{item.contact}</h2>
                <button onClick={()=>deleteContact(item.id)} >Deletto</button>

            </div>
        )
       })} 

    </div>
  )
}

export default Home
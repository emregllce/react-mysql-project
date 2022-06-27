import React, {useState, useEffect} from 'react'
import { useHistory, useParams, Link} from "react-router-dom"
import axios from 'axios'

const initialState = {
    name : "",
    email : "",
    contact : ""
}

const AddEdit = () => {

 const [state, setstate] = useState(initialState);  
 const {name, email, contact} =state;

 const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:5000/api/post", {
        name,
        email,
        contact
    }).then(()=>{
        setstate({name:"", email:"", contact:""})
    }).catch((err) => console.log(err.response.data))
    
 }

 const handleInputChange = (e) => {
    const  {name, value} = e.target
    setstate({...state, [name]: value})
 }
    
  return (
    <div>
        <form style={{
            margin : "auto",
            padding: "15px",
            maxWidth : "400px",
            alignContent : "center"
        }}
            onSubmit = {handleSubmit}>

            <label>Name</label><br/>
            <input required type="text" id='name' name="name" onChange={handleInputChange} value={name}/>
            <br/>
            <label>Email</label><br/>
            <input required type="email" id='email' name="email" onChange={handleInputChange} value={email}/>
            <br/>
            <label>Contact</label><br/>
            <input required type="number" id='contact' name="contact" onChange={handleInputChange} value = {contact}/>
            <br/><br/><br/>
            <input type="submit" value="save" />

            <Link to="/">
                <input type="button" value="back" />
            </Link>

        </form>
    </div>
  )
}

export default AddEdit
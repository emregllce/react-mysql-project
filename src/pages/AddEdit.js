import React, {useState, useEffect} from 'react'
import { useHistory, useParams, Link, useNavigate} from "react-router-dom"
import axios from 'axios'

const initialState = {
    name : "",
    email : "",
    contact : ""
}

const AddEdit = () => {

 const [state, setstate] = useState(initialState);  
 const {name, email, contact} =state;
 const navigate = useNavigate()

 const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !email || !contact) {

        alert("fill required area")
    }else {

        axios.post("https://react-mysql-project.herokuapp.com/api/post", {
         
            name,
            email,
            contact
        }).then(()=>{
            setstate({name:"", email:"", contact:""});
        }).catch((err) => console.log(err.response.data))
        navigate("/")
    }
    
 };

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
            <input  type="text" id='name' name="name" onChange={handleInputChange} value={name}/>
            <br/>
            <label>Email</label><br/>
            <input  type="email" id='email' name="email" onChange={handleInputChange} value={email}/>
            <br/>
            <label>Contact</label><br/>
            <input  type="number" id='contact' name="contact" onChange={handleInputChange} value = {contact}/>
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
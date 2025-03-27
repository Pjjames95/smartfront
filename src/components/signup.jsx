import React, {useState} from "react";
import axios from "axios"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = () =>{
    const navigate=useNavigate()
    const [formdata, setFormdata]=useState({
        email:"",
        first_name:"",
        last_name:"",
        password:"",
        password2:""
    })
    const [error, setError]=useState('')

    const handleOnchange = (e)=>{
        setFormdata({...formdata, [e.target.name]:e.target.value})
    }
    const {email, first_name, last_name, password, password2}=formdata
    return (
        <div>
            <div className='form-container'>
                <div style={{width:"100%"}} className='wrapper'>
                    <form>
                        <div className='form-group'>
                        <h2>Create an account</h2>
                                <label htmlFor="">First Name:</label>
                                <input type="text"
                                className='email-form'
                                name="first_name" 
                                value={first_name}
                                onChange={handleOnchange}/>
                            </div>
                                <div className='form-group'>
                                <label htmlFor="">Last Name:</label>
                                <input type="text"
                                className='email-form'
                                name="last_name" 
                                value={last_name} 
                                onChange={handleOnchange}/>
                            </div>
                                <div className='form-group'>
                                <label htmlFor="">Email:</label>
                                <input type="text"
                                className='email-form'
                                name="email" 
                                value={email} 
                                onChange={handleOnchange}/>
                            </div>
                                <div className='form-group'>
                                <label htmlFor="">Password:</label>
                                <input type="password"
                                className='email-form'
                                name="password" 
                                value={password} 
                                onChange={handleOnchange}/>
                            </div>
                                <div className='form-group'>
                                <label htmlFor="">Confirm Password :</label>
                                <input type="password"
                                className='email-form'
                                name="password" 
                                value={password} 
                                onChange={handleOnchange}/>
                            </div>
                            <input type="submit" value="Submit" className="submitButton" />
                            <h3 className='text-option'>Or</h3>
                            <div className='googleContainer'>
                        <div id="signInDiv" className='gsignIn'>
                        <button>Sign up with Google</button>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
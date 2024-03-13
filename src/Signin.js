import { useState } from "react";
import { Link } from "react-router-dom";

function Signin(){
    const [data, setData] = useState({
        username: '',
        email: '',
        password:''
    })

    const dataChange = (e) => {
        const { name,value} = e.target;
        setData({...data, [name]: value})
        console.log(data);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(data);

        fetch('http://localhost:8080/account/add', {
            headers: {
                "Content-Type" : "application/json"
            },
            method: "post",
            body : JSON.stringify(data)
        })
        .then((response) => {
            if(!response.ok) {
                throw new Error("failed to fetch data");
            }
            return response.json();
        })
        .then((data) => { 
            console.log("Fetch data:", data);
            setData(data);
        })
        .catch((error) => {
            console.error("Error : ", error);
        })
    }
    return(
        <div className="container">
        <h1 className="mt-4 mb-3">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group pb-3">
            <label htmlFor="UserName" className="pb-1 ps-2">Full Name</label>
            <input onChange={dataChange} value={data.username} name="username" type="text" className="form-control" id="UserName" placeholder="Enter your name" />
          </div>
          <div className="form-group pb-3">
            <label htmlFor="email" className="pb-1 ps-2">Email address</label>
            <input onChange={dataChange} value={data.email} name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group pb-3">
            <label htmlFor="password" className="pb-1 ps-2">Password</label>
            <input onChange={dataChange} value={data.password} name="password" type="password" className="form-control" id="password" placeholder="Password"/>
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="agreeCheck" />
            <label className="form-check-label" htmlFor="agreeCheck">I agree to the terms and conditions</label>
          </div><br />
          <button href='' type="submit" className="btn btn-primary">
            <Link to='/'>Sign Up</Link>
            </button>
        </form><br/>
        <div className="text-center">
        Already have an Account? Click here <Link to={'/login'}>Login</Link>
        </div>
      </div>
      
            
        
    )
}

export default Signin;
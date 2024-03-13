import { Link } from "react-router-dom";
import { useState } from "react";

function Login(){
  const [data, setData] = useState({
    username: '',
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

    fetch(`http://localhost:8080/account/check?username=${data.username}&password=${data.password}`)
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
        <h1 className="mt-4 mb-3">Log In</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group pb-3">
            <label htmlFor="UserName" className="pb-1 ps-2">UserName</label>
            <input type="text" name="username" value={data.username} onChange={dataChange} className="form-control" id="UserName" placeholder="Enter your username" />
          </div>
          <div className="form-group pb-3">
            <label htmlFor="password" className="pb-1 ps-2">Password</label>
            <input type="password" name="password" value={data.password} onChange={dataChange} className="form-control" id="password" placeholder="Password"/>
          </div>
          <br />
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
        <div className="text-center">
        Don't have an Account? Click here <Link to={'/signin'}>SignUp</Link>
        </div>
      </div>
    )
}

export default Login;
function Alogin(){
    return(
        <div className="container">
            <h2 className="mt-4 mb-3">Admin Login</h2>
            <form>
                <div className="form-group pb-3">
                    <label htmlFor="password" className="pb-1 ps-2">Admin</label>
                    <input type="text" name="adminName" className="form-control" id="adminName" placeholder="AdminName"/>
                </div>
                <div className="form-group pb-3">
                    <label htmlFor="password" className="pb-1 ps-2">Password</label>
                    <input type="password" name="password" className="form-control" id="password" placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>  
           
        </div>
    )
}

export default Alogin;
import { useState } from "react";

function Admin(){
  
  const [data, setData] = useState({
    name:'',
    city: '',
    days: '',
    price:'',
    img:'',
    description:''
})

const dataChange = (e) => {
    const { name,value} = e.target;
    setData({...data, [name]: value})
    console.log(data);
}

const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(data);

    fetch('http://localhost:8080/tp/add', {
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

const [selectedImage, setSelectedImage] = useState();
      
        const handleFile = () => {
          console.log("hello world")
          const formData = new FormData();
          // formData.append("file", selectedImage);
      
          fetch("http://localhost:8080/tp/add", {
              method: 'POST',
              body: formData,
              dataType: "jsonp"
          })
          .then(response => response.text())
          .then(text => {
              data.img=text;
              console.log(text)
          })
        }

  return(
        <div className="container mt-4">
        <h2 className="mb-4 text-center">Add New Plan</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group pb-3">
            <label htmlFor="planName" className="pb-1 ps-2">Plan Name</label>
            <input name="name" value={data.name} onChange={dataChange} type="text" className="form-control" id="planName" placeholder="Enter plan name" required />
          </div>
          <div className="form-group pb-3">
            <label htmlFor="planCity" className="pb-1 ps-2">Plan City</label>
            <input name="city" value={data.city} onChange={dataChange} type="text" className="form-control" id="planCity" placeholder="Enter plan City" required />
          </div>
          <div className="form-group pb-3">
            <label htmlFor="planDays" className="pb-1 ps-2">Plan Days</label>
            <input name="days" value={data.days} onChange={dataChange} type="number" className="form-control" id="planDays" placeholder="Enter plan days" required />
          </div>
          <div className="form-group pb-3">
            <label htmlFor="planPrice" className="pb-1 ps-2">Plan Price</label>
            <input name="price" value={data.price} onChange={dataChange} type="number" className="form-control" id="planPrice" placeholder="Enter plan price" required />
          </div>
          {/* <div className="form-group pb-3">
            <label htmlFor="planImage" className="pb-1 ps-2">Plan Image URL</label>
            <input name="img" value={data.img} onChange={dataChange} type="text" className="form-control" id="planImage" placeholder="Enter plan image URL" >
    </input>
          </div> */}


<div>

{selectedImage && (
  <div>
    <img
      alt="not found"
      width={"250px"}
      src={URL.createObjectURL(selectedImage)}
    />
    <br />
    <button onClick={() => setSelectedImage(null)}>Remove</button>
    <button onClick={ handleFile()}>Upload</button>
  </div>
)}
<br />
<br />

<input
  type="file"
  name="img"
  value={data.img}
  // onChange={(event) => {
  //   console.log(event.target.files[0]);
  //   setSelectedImage(event.target.files[0]);
  // }}
  onChange={dataChange}
/>
</div>

          <div className="form-group pb-3">
            <label htmlFor="planDescription" className="pb-1 ps-2">Product Description</label>
            <input name="description" value={data.description} onChange={dataChange} className="form-control" id="planDescription" rows="3" placeholder="Enter how your plan will"></input>
          </div><br />
          <div className="text-center form-group pb-3">
             <button type="submit" className="btn btn-primary">Add a Plan</button>
          </div>
         
        </form>
      </div>
    );

}

export default Admin;
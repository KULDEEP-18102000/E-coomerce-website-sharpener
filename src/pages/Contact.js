import { useState } from "react"

function ContactPage(){

    const [formData,setFormData]=useState({
        name:"",
        email:"",
        phoneNo:""
    })

    function onChangeHandler(e){
        
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    async function contactSubmitHandler(e){
        e.preventDefault()
        console.log(formData)
        const response= await fetch('https://react-http-92046-default-rtdb.firebaseio.com/Users.json',{
            method:'POST',
            body:JSON.stringify(formData),
            headers:{
                'Content-Type':'application/json'
            }
        })

    }

    return(
        <>
        <div className="container m-3">
        <form onSubmit={contactSubmitHandler}>
        <div class="mb-3">
    <label for="exampleInputName1" class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleInputName1" name="name" onChange={onChangeHandler}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" onChange={onChangeHandler}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPhone1" class="form-label">Phone No</label>
    <input type="tel" class="form-control" id="exampleInputPhone1" name="phoneNo" onChange={onChangeHandler}/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
        </>
    )
}

export default ContactPage
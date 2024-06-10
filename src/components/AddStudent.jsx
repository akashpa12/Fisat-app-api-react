import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddStudent = () => {
    const[data,setData]= useState(
        
        {
         "firstname":"",
         "lastname":"",
         "college":"",
         "dob":"",
         "course":"",
         "mobile":"",
         "email":"",
         "address":"",

        }
    )
    const inputHANDLER=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }   
    const readValue=()=>{
        console.log(data)
        axios.post(" https://courseapplogix.onrender.com/addstudents",data).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success")
                    {
                        alert("success")
                    }
                    else{
                        alert("error")
                    }
            }
        ).catch()
        
    }
    

    
    
  return (
    
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">First Name</label>
                            <input type="text" className="form-control" name='firstname' value={data.firstname} onChange={inputHANDLER} />
                        </div>
                        <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Last Name</label>
                            <input type="text" className="form-control" name='lastname' value={data.lastname} onChange={inputHANDLER} />
                        </div>
                        <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">College</label>
                            <input type="text" className="form-control" name='college' value={data.college} onChange={inputHANDLER}/>
                        </div>
                        <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Date-of-Birth</label>
                            <input type="date" name="dob" value={data.dob} onChange={inputHANDLER} id="" className="form-control" />

                        </div>
                        <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Course</label>
                            <input type="text" className="form-control" name='course' value={data.course} onChange={inputHANDLER} />
                        </div>
                        <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Mobile</label>
                            <input type="text" className="form-control" name='mobile' value={data.mobile} onChange={inputHANDLER} />
                        </div>
                        <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Email</label>
                            <input type="text" className="form-control"name='email' value={data.email} onChange={inputHANDLER} />
                        </div>
                        <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Address</label>
                            <textarea name="address" value={data.address} onChange={inputHANDLER} id="" className="form-control"></textarea>
                        </div>
                        <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddStudent
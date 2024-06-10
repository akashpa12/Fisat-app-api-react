import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {
    const [data,changedata]=useState([])
    const fetchData=()=>{
        axios.get("https://courseapplogix.onrender.com/getdata").then(
            (response)=>{
            changedata(response.data)
            }
        ).catch(
          (error)=>{
            console.log(error.messege)
            alert("error")
          }
        ).finally()

        }
        useEffect(()=>{fetchData()},[])
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">College</th>
      <th scope="col">DOB</th>
      <th scope="col">Course</th>
      <th scope="col">Mobile</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
      <th scope="col">__v</th>
    </tr>
  </thead>
 {data.map(
    (data,index)=>{
        return  <tbody>
        <tr>
          <th scope="row">{data._id}</th>
          <td>{data.firstname}</td>
          <td>{data.lastname}</td>
          <td>{data.college}</td>
          <td>{data.dob}</td>
          <td>{data.course}</td>
          <td>{data.mobile}</td>
          <td>{data.email}</td>
          <td>{data.address}</td>
          <td>{data.__v}</td>
        </tr>
      </tbody>
    }
 )}
</table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAll
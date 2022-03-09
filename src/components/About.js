import React from 'react'

export default function About() {
  let myStyle={
    color:'red',
    backgroundColor:'blue'
  }
  return (
   
    <div className="container" style={myStyle}>
      <h1 className ="my-3">About us</h1>
  <h4 className="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <p className="mb-2">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
  <button type="button" class="btn btn-dark">Enable dark mode</button>
   </div>
   
  
  )
}

import React from 'react'

function Formcomponent() {
  return (<body>
  <div class="wrap">
  <div class="container">
  <div class="class-form">
          <label>First</label>
          <input id="first" />

          <label>Last</label>
          <input id="last"/>

          <label>Email</label>
          <input id="email"/>

          <label>Phone</label>
          <input id="phone" />

          <label>Location</label>
          <input id="location"/>

          <button id="button" onclick="onCreate()">Create</button>
        </div>  
        </div>
        </div>
  </body>
  )
    
 }

export default Formcomponent
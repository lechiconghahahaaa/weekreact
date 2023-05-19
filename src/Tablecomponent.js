import React from 'react'

function Tablecomponent() {
  return (<body>
  <div class="wrap">
    <div class="container" >
    <div class="wrap-table">
        <table>
            <thead>
              <tr class="head">
                <th>ID</th>
                <th>First</th>
                <th>Last</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Location</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody id="data-table"></tbody>
          </table>
    </div>
    </div>
    </div>
  </body>      
    
  )
}

export default Tablecomponent
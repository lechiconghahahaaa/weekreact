import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Tablecomponent from './Tablecomponent';
import './cong.json'
import Formcomponent from './Formcomponent';
const root = ReactDOM.createRoot(document.getElementById('root'));
function Root(){
  return(<body>
    <div>
        <h2 class="wrap" >THÊM SỬA XÓA VỚI HTML + CSS + JS</h2>  
      <Tablecomponent></Tablecomponent>
      <Formcomponent></Formcomponent>
</div>
      </body>
  )
}
root.render(<Root/>);

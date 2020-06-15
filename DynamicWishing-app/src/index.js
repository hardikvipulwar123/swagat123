import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';


let curDate = new Date();
curDate = curDate.getHours();
let cursec = new Date();
cursec = cursec.toLocaleDateString()




let greeting = "";
const cssSyle = {
  color: ''

};

if (curDate >= 1 && curDate < 12) {
  greeting = "Good Morning";
  cssSyle.color = 'orange';

} else if (curDate >= 12 && curDate < 19) {
  greeting = "Good afternoon";
  cssSyle.color = 'yellow';
} else {
  greeting = "Good Night";
  cssSyle.color = 'Blue';
}

ReactDOM.render(
   <>
      <div>
          <h1>Hello sir ,  <span style={cssSyle}> {greeting}  </span><br></br>Time is :{curDate}</h1>
            
      </div>   
      



  </>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

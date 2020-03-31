import React from 'react';

function Demo(props) {
   return <div><h1 className="welcome">Welcome Accolite Family!</h1>  <h1>{props.name}</h1> <h1>{props.designation}</h1></div>
}
export default Demo
import React from 'react';
import ReactDOM from 'react-dom';
import { Images } from './images'

ReactDOM.render(
    
    <div>
      <h1>May muito chata</h1>
      <Images imagePath={"require(./images/resource/mayFoca.jpg).default"} archiveName={"May Foca"}/>
    {/*<img src={require('./images/resource/mayFoca.jpg').default} alt="May Foca" width={1528} height={859}/>*/}
    </div>
  ,document.getElementById('root')
);
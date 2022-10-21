import './App.css';
import React from 'react';
import classnames from 'classnames';
import { useState } from 'react';
import $ from 'jquery';


function App() {

  let [show, setShow] =useState("")

  return (
    <div className="App">
       반영구 홈페이지 입니다.
       안녕하세요. 반갑습니다.
       <div class='main'>
       
        <select className='select' onChange={(e)=>{
           setShow(e.target.value)}}>
          <option></option>
          <option>반영구</option>
          <option>2</option>
        </select>

        <select className={classnames('select2', {show : show == '1'})}>
          <option>1-1</option>
          <option>1-2</option>
        </select>

        <select className={classnames('select2', {show : show == '2'})}>
          <option>2-1</option>
          <option>2-2</option>
        </select>

        
        
        
       </div>
    </div>

  );
}


export default App;

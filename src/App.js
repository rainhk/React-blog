import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';

  let [coat, setCoat] = useState(['남자 코트 추천', '여자 코트 추천', '아이 코트 추천']);
  let [good, good_i] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [current, setCurrent] = useState('');
  let [input, setInput] = useState('');

  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth();
  let year = newDate.getFullYear();

  return (
    <div className="App">
      <div className="black-nav"> 
      <h4 style={ {color : 'white'} }> 블로그 </h4> 
      </div>

      <button onClick={() => {
        let copy = [...coat];
        copy.sort();
        setCoat(copy);
      }}>
        정렬
      </button>

      <button onClick={() => {
        let copy = [...coat];
        copy[0] = 'male coat recommendation';
        setCoat(copy);
        
        }}> change language </button>

      {/* <div className='list'>
        <h4>{coat[0]} <span onClick={() => {good_i(good+1)}}>👍</span> {good} </h4>
        <p>1/4/2023</p>
      </div>
      <div className='list'>
        <h4>{coat[1]}</h4>
        <p>1/4/2023</p>
      </div>
      <div className='list'>
        <h4 onClick={()=> {
          // same as if and else
          setModal(!modal)
          // if(modal){
          //   setModal(false)
          // }
          // else {
          //   setModal(true)
          // }
          }}>{coat[2]}</h4>
        <p>1/4/2023</p>
      </div> */}
      
      {
        coat.map(function(a, i){
          return (
          <div className='list' key={i}>
          <h4 onClick={()=> {setModal(!modal); setCurrent(coat[i]);}}> {coat[i]} 
          <div variant="contained" style={{float: 'right'}}>
            <button onClick={(e) => {
              e.stopPropagation();
              let copy_1 = [...coat];
              copy_1.splice(i, 1);
              setCoat(copy_1);  
            }}> Delete </button>
          </div>
          <span onClick={(e) => {
            e.stopPropagation();
            let copy = [...good];
            copy[i] = copy[i] + 1;
            good_i(copy);  
          }}>👍</span> {good[i]} </h4>

          <p> {month} / {date} / {year} </p>
        </div>)
        })
      }

      <input onKeyDown={(e)=>{ 
        if (e.key === 'Enter'){
          if (!e.target.value.trim() == ""){
            let copy = [e.target.value, ...coat];
            setCoat(copy);
            let copy_2 = [...good];
            copy_2 = [0].concat(copy_2)
            good_i(copy_2)
        }}}}></input>


      {
        modal == true ? <Modal color={'skyblue'} coat={current}></Modal> : null
      }
    </div>
  );
}

// const Modal = () => {}

// how to make components
function Modal(props){
  return (
      <div className='modal' style={{background : props.color}}>
        <h4> {props.coat} </h4>
        <p> date </p>
        <p> details </p>
      </div>
  )
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';

  let [coat, setCoat] = useState(['남자 코트 추천', '여자 코트 추천', '아이 코트 추천']);
  let [good, good_i] = useState(0);

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

      <div className='list'>
        <h4>{coat[0]} <span onClick={() => {good_i(good+1)}}>👍</span> {good} </h4>
        <p>1/4/2023</p>
      </div>
      <div className='list'>
        <h4>{coat[1]}</h4>
        <p>1/4/2023</p>
      </div>
      <div className='list'>
        <h4>{coat[2]}</h4>
        <p>1/4/2023</p>
      </div>
    </div>
  );
}

export default App;

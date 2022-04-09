import logo from './logo.svg';
import './App.css';
import {InputBoox} from "./InputBoox";

function App() {
  return (
    <div className="App">
      <InputBoox/>

    </div>
  );
}

export default App;


// import React, { useState } from 'react';
// function App() {
//     const [inputValue, valueChange] = useState('');
//     const [lists, submitClick] = useState([]);
//     const testClick = () => {
//         valueChange('');
//         submitClick([...lists, inputValue]);
//     };
//     const liClick = function (e) {
//         lists.splice(e, 1);
//         submitClick([...lists]);
//     };
//     // onchang onclick 分别进行事件监听
//     return (
//         <div className="App">
//             <input value={inputValue} onChange={(e) => valueChange(e.target.value)} />
//             <button onClick={testClick}>提交</button>
//             <ul>
//                 {lists.map((item, index) => (
//                     <li key={index} onClick={(e) => liClick(index)}>
//                         {item}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
// export default App;

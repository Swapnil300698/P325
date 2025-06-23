import './App.css';
import Counter from './UseRed';
import Auth from './Auth';
import { useState } from 'react';
import ConPro from './Context/ConPro';
import MyComponent from './Context/MyComponent';
import MyPureComponent from './Context/MyPureComponent';
import MyClass from './MyClass';
import MyFun from './MyFun';

function App() {
  
  const [uStatus, setuStatus] = useState(false);
  const login = () => {
    setuStatus(true);
  };
  return (
    <div>
      <MyClass/>
      <MyFun/>
       <ConPro.Provider value={{ status: uStatus, login: login }}>
        <Auth />
      </ConPro.Provider>
      <button onClick={login}>submit</button>
       <Counter/>
       <MyComponent value="swapnil"/>
       <MyPureComponent value="rajput"/>
       
    </div>
  );
}
 export default App;
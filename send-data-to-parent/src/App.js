
import Button from './components/Button';
import { useState } from 'react';

function App() {

  const[data,setData]=useState([])

  const handleUsers = (data) =>{
  setData(data)
  }

  return (
    <div className="App">
     <Button getUsers={handleUsers}/>
     {
      data.map((item)=>(
        <div key={item.id}>
          <span>{item.id}</span>
          <span>{item.name}</span>
          </div>
      ))
     }
    </div>
  );
}

export default App;

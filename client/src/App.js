import React, {useState} from "react";
import './App.css';

function App() {
  const [values, setValues] = useState();
  console.log(values);
  const handleChangeValues = (value) => {
    setValues((preValue)=> ({
      ...preValue,
      [value.target.name]: value.target.value,
      }));
  };
  
  return (
    <div className='app-container'>
      <div className='register--container'>
        <h1 className="register--title"> crud </h1>
          <input 
          type="text" 
          placeholder="Nome" 
          name='name'
          className='register--input'
          onChange={handleChangeValues}
        />
        <input 
          type="text" 
          placeholder="Preço" 
          name='const'
          className='register--input'
          onChange={handleChangeValues}
        />
        <input 
          type="text" 
          placeholder="categoria" 
          name="category"
          className="register--input"
          onChange={handleChangeValues}
        />
        <button className="register--button">Cadastrar</button>
      </div>
    </div>
    
  );
}
export default App;


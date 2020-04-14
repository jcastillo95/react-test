import React, { Component } from 'react';
import { render } from 'react-dom';

const Saludar =({name,language}) => {
  const saludo = language ==='es'? 'Hola ':'Hello ';
  
  return <p>{saludo}{name}</p>;

}
const App =() =>{
  return <div> <Saludar name='Jonathan' language='en' /> </div>
}
render(<App />, document.getElementById('root'));

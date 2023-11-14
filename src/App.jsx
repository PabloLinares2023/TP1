//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import React, { useState } from 'react';

const Contador = ({ candidato }) => {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <div className='contador'>
      <div className='candidato-box'>
        <h2>Candidato {candidato}</h2>
      </div>
     
      <div>
        <h3 style={{ color: '#6495ED' }}>{contador}</h3>
        <button onClick={incrementar}>+</button>
        <button onClick={decrementar}>-</button>
      </div>
    </div>
  );
};

const BocadeUrna = () => {
  return (
    <div>
      <h1 className='Titulo'>Boca de Urnas</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Contador candidato={1} />
        <Contador candidato={2} />
      </div>
    </div>
  );
};

export default BocadeUrna;


import React from "react";
import Main from './Components/Main'


export default function App() {

    const container = {
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100%', 
        background: 'linear-gradient(#7617BC, #02093C)'
      };
    
    return (
        <>
        <div style={container}>

          <Main />

        </div>
        
        </>
    )
    
};

import React from 'react';
import ButtonDisplay from './Button/ButtonDisplay';

// component, JSX
// Using Arrow Function (to make arrow function write function name = () => { })
// Named Export
export const App=()=>{
    return(
        // Use <div> </div> while returning multiple tags
        <div>
        <h1 style={
                {color : "red", backgroundColor : "black",
                margin : "10px", padding : "10px", width : "170px"}
            }> Hello World </h1>
            <ButtonDisplay/>
        </div>
    )
}

/*
// Default Export
export default App;
*/
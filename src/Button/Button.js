import React from 'react';

const Button=({btnText})=>{
    return (
        <button className="button"> {btnText} </button>
    )
} 

export default Button;


// Here we made a separate component for Button and imported it in App.js
// for avoiding redundancy we passe btntext in component and returned btnText
// that btnText will get exported from here and imported in App.js
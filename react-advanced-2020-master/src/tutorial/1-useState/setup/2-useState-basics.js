import React, { useState } from 'react';
//useState is a function that return an array, we need to pass a default value that can be whetever we want,
// a string a number ecc., in this case is s astring 'random title ? and this value it's what we are going to display inside the html
// then we deconstruct the array and we set it to be equal to a value (text in this case) that is the default value and to a function
// called setNameofthevaluewepassbefore (setText in this case) and this function it's what is going to change the text when we trigger the event
// with the if statement we can make the value toggle

const UseStateBasics = () => {
  //console.log(useState('hello world'))
  //const value = useState(1)[0]
  //const handler = useState(1)[1]
  //console.log(value,handler)

  const [text,setText] = useState('random title')

  const handleClick = () => {
    if(text === 'random title'){
      setText('new title')
    } else {
      setText('random title')
    }
  }
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>Change Title</button>
    </React.Fragment>
  );
};

export default UseStateBasics;

//hooks always start with use
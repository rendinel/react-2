import React, { useState, useEffect } from 'react';
//api from where we get the data
const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {

  //define the useState and set the initial value to be an empty array we are going to fill with getUsers
  const [users,setUsers] = useState([]);

  //function that fetch the data and fill the users
  const getUsers = async() => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  }

  //we call the getUsers function at every render but we pass the second parameter to be an empty array otherwise the function will run at every render 
  //entering an infinite loop,with the [] it will run only the first time
  useEffect(()=>{
    getUsers(); 
  },[])
  //display data inside html,we map the users array so it rerurn a new array where we deconstruct the data we need
  // and print inside the browser 
  return (
    <>
    <h2>github users</h2>
    <ul className="users ">
      {users.map((user)=>{
        const {id,login,avatar_url,html_url} = user
        return <li key={id}>
          <img src={avatar_url} alt={login}/>
          <div>
            <h4>{login}</h4>
            <a url={html_url}>profile</a>
          </div>
        </li>
      })}
    </ul>
    </>
  );
};

export default UseEffectFetchData;

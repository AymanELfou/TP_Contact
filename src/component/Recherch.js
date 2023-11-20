import React from 'react';
import { useState } from 'react';
import './recherch.css';

export default function Recherch() {

    const [users,setUsers] = useState([])
    
    const [formData,setFormData] = useState({
        name:'',
        userName:'',
        email:'',
    })

    const [filtredUser,setFiltredUser] = useState([])

    /* useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => {
            setUsers(data);
        });
    }
    ,[]) */


    const handlSubmit = (e) =>{
        e.preventDefault();

        //Add data to the array
        setUsers([...users,formData])
        alert('User added successfully!')
        //Clear the form
        setFormData({name:'',userName:'',email:''})

    }

    const handlChenge = (e) => {
        //This line uses destructuring assignment to extract the name and value properties
        // from the e.target object. name represents the name of the form field and value represents the current value entered into the field.
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

    const handlSearch = (e) =>{
        const searchTxt = e.target.value;
        const filtredUser = users.filter( 
            (user)=> user.name.toLowerCase().includes(searchTxt.toLowerCase()))
            setFiltredUser(filtredUser)
    }
    const handleDelete = (index) => {
        const updatedUsers = [...users];
        updatedUsers.splice(index, 1);
        setUsers(updatedUsers);
        alert('User Deleted successfully!')
      };

    //if you want to use the UseEffect Hook in filter input 
    //you shoold to create a new useState and put the filtredUser function in UseEffect and combine it


    return (
    <div className='SuperstarApp form-group'>
        <fieldset>
          <h1><i>Add User:</i></h1><br />
            <form action="" onSubmit={handlSubmit}>
                <label htmlFor="name"><h5><b>Name:</b></h5></label>
                <input placeholder="Your Name" type="text" name='name' className="" value={formData.name} onChange={handlChenge} /><br /><br />

                <label htmlFor="username"><h5><b>UserName:</b></h5></label>
                <input placeholder="Your UserName" type="text" name='userName' value={formData.userName} onChange={handlChenge}/><br /><br />

                <label htmlFor="email"><h5><b>Email:</b></h5></label>
                <input placeholder="Your Email" type="email" name='email' value={formData.email} onChange={handlChenge}/><br /><br />
                <button type='submit'>ADD</button>
                </form>
            </fieldset>
        <br />





        <h3>Search By Name:</h3>
        <input type="text" placeholder='.....' onInput={handlSearch}/>

        <ul>
          {/* Display filtered users */}

          {filtredUser.map((user, index) => (
            <li key={index}>
              <span style={{"color":"orange"}}>Name:</span> {user.name} / <span style={{"color":"orange"}}>Username:</span> {user.userName} / <span style={{"color":"orange"}}>Email:</span> {user.email}
              <button style={{"backgroundColor":"red","padding":"5px"}} onClick={() => handleDelete(index)}>❌</button>
            </li>
          ))}
        </ul>

    </div>
  )
    }

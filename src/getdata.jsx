import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Getdata = () => {
  const [users, setUsers] = useState([]);



    // useEffect(() => {
    
    //   // Fetch data from json-server
    //   axios.get('http://localhost:3452/user')
    //     .then(response => {
    //       setUsers(response.data);
    //       setLoading(false);
    //     })
    //     .catch(error => {
    //       console.error('Error fetching data:', error);
    //       setError(error);
    //       setLoading(false);
    //     });
    // }, []);

  useEffect(()=>
  {
      ani1();
  },[]);
  //get data Code

  const ani1 = async() =>
  {
        let a = await fetch("http://localhost:3452/user");
        let b = await a.json();
        setUsers(b);
  }

  //delete data Code 

  const ani = async(a)=>
  {
    try
    {
    const response = await fetch(`http://localhost:3452/user/${a}`, {
      method: 'DELETE',
      })

      if (response.ok) {
        console.log('Item deleted successfully');
        // Optionally, handle state update or UI feedback here
      } else {
        console.error('Failed to delete item');
      }
    }
    catch (error) {
      console.error('Error:', error);
    }

    ani1();
  }


  return (
    <div>
      <h1>User List</h1>

      <Table className="custom-table" striped bordered hover>
          <tbody>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
        {users.map((user,i) => (
          <tr>
            <td>{i+1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td><Button variant='danger' onClick={()=>ani(user.id)}>Delete</Button></td>
            <td>
              <NavLink to={`/up/${user.id}/${user.name}/${user.email}`}><Button variant='primary'>Update</Button></NavLink>
              </td>
          </tr>

        ))}
           </tbody>
        </Table>
     
    </div>
  );
};

export default Getdata;
import { useParams } from "react-router-dom"
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import './ins.css'
const Update = () =>
{  

    const navigate = useNavigate();

    const [nam, setName] = useState('');
  const [emai, setEmail] = useState('');


    const a = useParams();
    const { id, name, email } = a;


    const an = async(a) =>
    {

        try {
            const response = await axios.patch(`http://localhost:3452/user/${a}`, {
              name: nam,
              email:emai
            });
      
            if (response.status === 200) {
               alert('Item updated successfully');
              // Optionally, handle state update or UI feedback here
            } else {
              alert('Failed to update item');
            }
          } catch (error) {
            console.error('Error:', error);
          }

          
    }

    return(
        <>
         <div className="form-container">
        <h1>Contact Us</h1>
    <form onSubmit={()=>an(id)}>
      <div className="form-group">
        <label>Name:</label>
        <input id='name'
          type="text"
          placeholder={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input id='email'
          type="email"
          placeholder={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div class="form-group">
     <button type="submit">Update</button>
     <button style={{marginLeft:'100px'}} onClick={()=>navigate('/')}>go to home</button>
      </div>
    </form>
    </div>
        </>
    )
}   

export default Update
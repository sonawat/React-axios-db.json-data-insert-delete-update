import { Table } from "react-bootstrap"
import Getdata from "./getdata"
import { BrowserRouter, Routes,Route, NavLink } from "react-router-dom"
import Insert from "./Insert"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css'
import Update from "./Update";
const App = () =>
{
  return(
    <>
    
    <BrowserRouter>

    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Jai Mata Di</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><NavLink to="/">Home</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/ins">Features</NavLink></Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

   
  
   

    <Routes>
      <Route path='/ins' element={<Insert/>} />
      <Route path='/' element={<Getdata />} />
      <Route path='/up/:id/:name/:email' element={<Update />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
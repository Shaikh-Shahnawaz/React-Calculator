import React  from 'react'
import { Navbar ,Container,NavDropdown,Form,Nav,FormControl,Button} from 'react-bootstrap';
import { useEffect, useState } from 'react';
function Header(props) {
//----------------------------------------------------------

const [state, setstate] = useState()


  useEffect(()=>{
    console.log("Use effect get called")
  },[state])

  console.log("I am rendered Header")
//-------------------------------------------------------------
    // debugger;
    return (
        <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
                {/** dynamic display of array items --->  */}

            {
                props.headerLinks.map((ele)=>(

                 <Nav.Link href="#action1">{ele}</Nav.Link>
                   
                ))
            }
            
            {/* {
              props.RemoveHeaderLinks.pop()
            
            } */}



            
              
             
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header

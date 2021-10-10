import React, { useState } from 'react'
import { Form ,ButtonForm,Button} from 'react-bootstrap';
function Banner(props) {

const [state,setState] = useState(""); 
    
function handleChange(event){
    setState(event.target.value)
}
function addLink(){
    props.AddHeaderLinks(state)
}

function removeLink(){
    props.RemoveHeaderLinks()
}

    return (
        <div>


            <Form>
                <Form.Group className="mb-3 container" style={{marginTop:'15px'}} controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" onChange={handleChange} placeholder="Enter Link Name" />
                   
                </Form.Group>

               
                
                <Button variant="primary" onClick={addLink} type="button">
                    Add Header Link
                </Button>
                <Button className="" style={{marginLeft:"8px"}} variant="primary" onClick={removeLink} type="button">
                    Remove Header Link
                </Button>
            </Form>

        </div>
    )
}

export default Banner



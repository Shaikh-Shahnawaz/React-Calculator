import React, { useState } from 'react'
import "./MainSection.css"
function MainSection() {


let [state, setState]= useState(0) /// for result

const [input, setInput]=useState(0) // for input


function handleChange(event){
    setInput(event.target.value)
}

function addBtn(){

setState(Number(state) + Number(input))

}

function subtractBtn(){
setState(Number(state) - Number(input))
}

    return (
        <>

            <div className="main-section container ">

                <div className=" col-md-6 offset-0  all-details">
                    <h1 className="py-1 mt-2 first-h1">React Project One</h1>



                    <p className="my-4">
                        <h5 className="mb-3">Enter Your Number</h5>
                        <input type="number" onChange={handleChange} name="name" id="" />
                    </p>

                    <button className="my-2 btn btn-primary col-md-4 " onClick={addBtn}>Addition</button>
                    <button className="my-2 btn btn-danger col-md-4 offset-1" onClick={subtractBtn}>Subtraction</button>

                    <h5 className="my-3">Results</h5>
                    <p className="my-3  result-p"> <h2>{state}</h2> </p>

                   


                </div>
            </div>

        </>
    )
}

export default MainSection

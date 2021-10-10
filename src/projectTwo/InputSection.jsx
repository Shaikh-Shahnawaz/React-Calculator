import React, { useState } from 'react'
import "./InputSection.css"
function InputSection(props) {

const [details, setDeatails] = useState({
    name:"",
    amount:0,
    people:0,
    tipPercent:0,
    totalBill:0,
    remark:""
})


function handleChange(event){

setDeatails({
...details, [event.target.name]:event.target.value 
})

} 

function calculateBill(){
    
if(details.tipPercent == 5){
    details.remark = "Poor 😑" 
}
else if(details.tipPercent == 10){
    details.remark = "Good 🙂"
}
else{
    details.remark = "Excellent 😍"
}
 details.totalBill =  ((details.amount / 100) * details.tipPercent)/details.people  
props.AddDetails(details)

}


    return (
        <div className="container-fluid bg-dark text-light ">

            <div className="myInput container  py-5 d-flex justify-content-center flex-column align-items-center">

                <div class="mb-2 col-md-6 ">
                    <label for="exampleInputName" class="form-label">Enter your name</label>
                    <input name="name" onChange={handleChange} placeholder="your name"  id="billAmount" type="text" class="form-control" required />
                    <span id="span-id"> </span>
                </div>
                <div class="mb-2 col-md-6 ">
                    <label for="exampleInputName" class="form-label">Enter your bill amount</label>
                    <input onChange={handleChange} name="amount"  min="0" oninput="validity.valid||(value='');" placeholder="bill amount"  id="billAmount" type="number" class="form-control" required />
                    <span id="span-id"> </span>
                </div>
                <div class="mb-2 col-md-6">
                    <label for="exampleInputName" class="form-label ">How many people are sharing the bill ?</label>
                    <input onChange={handleChange} name="people"  validate min="1" oninput="validity.valid||(value='');" placeholder="number of people" id="totalPerson" type="number" class="form-control " required />
                    <span id="span-id3"> </span>
                </div>
                <div class="mb-2 col-md-6 ">
                    <label for="exampleInputName" class="form-label">How was the service ?</label>
                    <select onChange={handleChange} name="tipPercent" id="tipPercent" class="form-select" aria-label="Default select example">
                        <option selected disabled>--Select Tip Menu--</option>
                        <option value="5">Not so good-5%</option>
                        <option value="10">Medium-10%</option>
                        <option value="20">Excellent-20%</option>
                    </select>
                </div>

                <a type="button" onClick={calculateBill} class=" d-grid btn btn-info mt-4 col-md-6 ">Add Customer</a>

            </div>

        </div>
    )
}

export default InputSection

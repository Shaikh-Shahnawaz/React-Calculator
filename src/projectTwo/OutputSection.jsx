import React, { useState } from 'react'
import "./OutputSection.css"
function OutputSection(props) {

const [show,setShow] = useState(false)

function totalTipCustomer(){

    setShow(true)
}

    return (

        <div className="container-fluid  bg-light">
            {/* <h1>{totalTipCustomer}</h1> */}
            <div className=" container myOutput pt-5 pb-3 d-flex  flex-column justify-content.center align-items-center ">

                <h2 className="col-md-9 text-center">CUSTOMERS LIST</h2>

                {/* ==========================table========================== */}
                <div className="col-md-9">

                    <table className="table table-hover ">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Customer Name</th>
                                <th scope="col">Tip Amount</th>
                                <th scope="col">Remark</th>

                            </tr>
                        </thead>
                         <tbody>
                            {
                                
                                props.data.map((element, index) => (
                                    <tr>
                                        <th scope="row">{index+1}</th>
                                                    <td>{element.name}</td>
                                       
                                                    <td>{element.totalBill.toFixed(2)}</td>
                                                    <td>{element.remark}</td>
                                    
                                    </tr>
                                ))
                            }



                        </tbody> 

                    </table>
                </div>

                <a type="button" onClick={totalTipCustomer} class=" d-grid btn btn-outline-dark mt-5  col-md-4 ">Total Tip & Customer</a>

                {/* ==========================Alert========================== */}
                <div class="alert alert-info alert-dismissible fade show col-md-6 mt-5 mb-4" role="alert">
                    Total Customer :  <strong> 
                        {
                        show ? props.data.length : ''
                        }
                            
                        </strong> &nbsp;
                        | &nbsp; Total Tip: <strong>
                        ${
                        show ? props.data.reduce((acc,element)=> {acc += element.totalBill; acc.toFixed(); return acc },0).toFixed(2) : ''
                        } 
                        </strong> .
                       
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>

            </div>
        </div>
    )
}

export default OutputSection

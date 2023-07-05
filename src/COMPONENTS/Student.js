import React, { useState } from 'react'
import "./Student.css"


function Student() {
    
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        age: "",
        gender: ""
    })

    const[datatable,setDatatable]=useState([])

    const handleChange = (e) => {
        setInputs(
            {
                ...inputs,
                [e.target.name]: e.target.value,
            }
        )
    } 
 
    

    function handlesummit(e){
      e.preventDefault();
      console.log("inputs",inputs)
      setDatatable([...datatable,inputs])
      
    }
    console.log("datatable",datatable)

    
    return (
        <>
        <div>
            <form className='form' onSubmit={handlesummit}>
                <div className='container'>
                     NAME:<input type="text" className='name' placeholder='Type your name' name='name' onChange={handleChange} value={inputs.name} /><br />

                    EMAIL:<input type="email" name='email' className='name' placeholder='Type your email' onChange={handleChange} value={inputs.classss}  /><br />

                    AGE:<input type="number"  name='age' className='name' placeholder='Type your age' onChange={handleChange} value={inputs.age} /><br />

                     GENDER: <input type="text" value={inputs.gender} className='name' placeholder='Type your gender'
                        onChange={handleChange} name='gender'
                    /><br />

                    <button  type='summit'>Summit{" "}</button> 
                </div>
            </form>

        </div>
         <div>
            
         <table className='table1'>
            
            <thead>
            <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Age</td>
                    <td>Gender</td>
                    </tr>
                    </thead>
             </table>
             <body>
                {
                    datatable.map((item)=>(
                        <tr>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.age}</td>
                        <td>{item.gender}</td>
                        </tr>
                    ))
                }
             </body>
         </div>
         </>
    );
}


export default Student



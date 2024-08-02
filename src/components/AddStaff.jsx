/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddStaff = ({onAddStaff}) => {


    const [staff, setStaff] = useState({
        firstName: "", lastName: "", email: "", phone: "", position: "", salary: ""
    });


    const handleChange = (e) => {
        const { name, value } = e.target;

        setStaff({ ...staff, [name]: value });
    }

    const [error, setError] = useState(null);


    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            await onAddStaff(staff);
            setStaff({
                firstName: "", lastName: "", email: "", phone: "", position: "", salary: ""
            })
           
        }
        catch(error){
            setError("Failed to add Staff")
            toast.error("Failed to add Staff")
        }
       
    }

    return <>
        <div className="container">
            <form onSubmit={handleSubmit} className="form-section">
                <div className="row mb-2">
                    <div className="col-md-4">
                        <label className="form-label">First Name</label>
                        <input name="firstName" value={staff.firstName} onChange={handleChange} type="text" className="form-control" placeholder="Enter first name" />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Last Name</label>
                        <input name="lastName" value={staff.lastName} onChange={handleChange} type="text" className="form-control" placeholder="Enter Last name" />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Email</label>
                        <input name="email" value={staff.email} onChange={handleChange} type="email" className="form-control" placeholder="Enter Email" />
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-4">
                        <label className="form-label">Phone</label>
                        <input name="phone" value={staff.phone} onChange={handleChange} type="number" className="form-control" placeholder="Enter Phone" />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Position</label>
                        <input name="position" value={staff.position} onChange={handleChange} type="text" className="form-control" placeholder="Enter Position" />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Salary</label>
                        <input name="salary" value={staff.salary} onChange={handleChange} type="text" className="form-control" placeholder="Enter Salary" />
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-12">
                        <button type="submit" className="add-staff">Add Staff</button>
        
                    </div>
                </div>
            </form>
        </div>
    </>
}


export default AddStaff;
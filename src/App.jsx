
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import AddStaff from './components/AddStaff'
import StaffList from './components/StaffList'
import { useEffect, useState } from 'react'
import Api from './api/Api'
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {

  const [staff, setStaff]=useState([]);
  const [error, setError]=useState(null);

  const fetchList =async() =>{
    try{
      
      const response=await Api.get("/get-staff-list");
      setStaff(response.data)
      console.log("Staff get List ",response.data)
    }
    catch(error){
      setError("Failed to fetch the staff List");
      console.error(error);
    }
  }

  useEffect(() =>{
    fetchList()
  },[]);


  const handleAddStaff=async(newStaff) =>{
    try{
      await Api.post('/create-new-staff',newStaff);
      await fetchList();
      toast.success("Staff added successfully")
    }
    catch(error){
      setError("Failed to Add Staff!");
      console.error(error);
      toast.error("Failed to add Staff")
    }
  }

  const handleDelete =async(id) => {
    try{
        await Api.delete(`/delete-staff/${id}`);
        await fetchList();
        toast.success("Staff Delete successfully!")
    }catch (error) {
        setError("Failed to Delete Staff")
        toast.error("Failed to Delete Staff")
    }
}
 
 

  return (
    <>
    <AddStaff onAddStaff={handleAddStaff}/>
    <StaffList staff={staff} error={error} onDelete={handleDelete}/>
    <ToastContainer/>
    </>
  )
}

export default App

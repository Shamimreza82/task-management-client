import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const NewTask = () => {

    const {user} = useContext(AuthContext)
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async (data) => {
        
        const task = {
            name: user.email, 
            title: data.title, 
            description: data.description,
            priority: data.priority,
            date: data.date,
            status: 'active'
        }

        
        try {
            axios.post('http://localhost:5000/allTask', task )  
            .then(res => {
                console.log(res.data);
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Task Add SuccessFull",
                  showConfirmButton: false,
                  timer: 1500
                });
                navigate('/dashboard')
            })  
            
        } catch (error) {
            console.log(error);
        }

      }

      
      

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <h1 className="text-center py-4 font-bold text-xl">New task</h1>
        <div className="form-control">
          <input
            type="Title"
            placeholder="Title"
            className="input input-bordered"
            {...register("title")}
            required
          />
        </div>
        <div className="form-control">
          <input
            type="date"
            placeholder="text"
            {...register("date")}
            className="input input-bordered"
            required
          />
        </div>
        <select className="select select-bordered w-full max-w-xs" {...register("priority")} >
          <option disabled selected className="text-gray-500">
          Priority
          </option>
          <option>Low</option>
          <option>Moderate</option>
          <option>High</option>
        </select>
        <div className="form-control">
          <textarea
            className="textarea textarea-bordered"
            placeholder="Description"
            {...register("description")}
          ></textarea>
        </div>
        <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="save" />
        </div>
      </form>
    </div>
    </div>
  );
};

export default NewTask;

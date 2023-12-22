import React, { useState } from 'react';
import useAllTask from '../../hooks/useAllTask';
import { MdDeleteForever, MdOutlineEditNote } from 'react-icons/md';
import Draggable from 'react-draggable';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { FaTasks } from 'react-icons/fa';


const Ongoing = () => {

  const { allTask, refetch } = useAllTask();
  const axiosPublic = useAxiosPublic();
  const [order, setSOrder] = useState("");

  // })

  const handelDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosPublic.delete(`/allTask/${id}`);
        if (res.data.deletedCount === 1) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          refetch();
        }
        console.log(res.data);
      }
    });
  };

  const handelStatus = async (id) => {
  
    const status = {
      status: order 
    }
    console.log(status);
    const result = await axiosPublic.put(`/allTaskPut/${id}`, status);
    console.log(result.data);
    refetch()
  };

    const ongoing = allTask.filter(task => task.status == 'ongoing')
    console.log(ongoing);
    // if(ongoing !== []){
    //     return <div className='flex justify-center items-center h-screen '><FaTasks className="text-4xl text-gray-400"></FaTasks></div>
    // }




    return (
        <div>
      {ongoing.map((task) => (
        <Draggable key={task._id} >
          <div className="cursor-pointer bg-slate-200 mt-3 px-4 mx-4 rounded-md">
            <h1 className="text-center py-2 text text-xl">{task.title}</h1>
            <h1>Date: {task.date}</h1>
            <h1
              className={
                task.priority == "High"
                  ? "text-red-600 py-2 font-bold"
                  : "text-green-600 py-2"
              }
            >
              {" "}
              {task.priority}
            </h1>
            <div className="flex justify-end items-center">
              {/* <select
                onClick={() => handelStatus(task._id)}
                onChange={(e) => setSOrder(e.target.value)}
                className="select bg-slate-100 select-bordered select-sm  max-w-xs w-2/4 my-3"
              >
                <option disabled selected>
                  Status
                </option>
                <option>Ongoing</option>
                <option>Compleate</option>
              </select> */}

              <div className="join py-3">
                <select
                  className="select select-bordered btn-sm join-item px-6"
                  onChange={(e) => setSOrder(e.target.value)}
                >
                  <option disabled selected>
                    Status
                  </option>
                  <option>ongoing</option>
                  <option>compleate</option>
                </select>
                <div className="indicator">
                  <button onClick={()=>handelStatus(task._id)} className="btn join-item btn-sm ">Ok</button>
                </div>
              </div>

              <div className="text-xl px-2 py-1 ml-2 bg-slate-100 rounded-md">
                <MdOutlineEditNote className="text-green-500"></MdOutlineEditNote>
              </div>
              <div
                onClick={() => handelDelete(task._id)}
                className="text-xl px-2 py-1 ml-2 bg-slate-100 rounded-md"
              >
                <MdDeleteForever className="text-red-600"></MdDeleteForever>
              </div>
            </div>
          </div>
        </Draggable>
      ))}
    </div>
    );
};

export default Ongoing;
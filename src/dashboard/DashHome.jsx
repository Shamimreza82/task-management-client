import Completed from "./allTask/Completed";
import Ongoing from "./allTask/Ongoing";
import ToDo from "./allTask/toDo";



const DashHome = () => {
    return (
        <div>
            <div className="grid grid-cols-3 ">
                <div className="bg-[#EFF2F3] min-h-screen">
                    <h1 className="flex justify-center py-2 bg-[#2ED7D8]">TO DO</h1> 
                    <ToDo></ToDo>
                </div>
                <div className="bg-[#EAEDEE]">
                <h1 className="flex justify-center py-2 bg-[#00A1F2]">Ongoing</h1> 
                    <Ongoing></Ongoing>
                </div>
                <div className="bg-[#F0F3F4]">
                <h1 className="flex justify-center py-2 bg-[#A179F2]">Completed</h1> 
                    <Completed></Completed>
                </div>
            </div>
        </div>
    );
};

export default DashHome;
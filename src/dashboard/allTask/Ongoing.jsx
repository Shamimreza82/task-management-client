import React from 'react';
import useAllTask from '../../hooks/useAllTask';


const Ongoing = () => {

    const{allTask, refetch} = useAllTask()
    console.log(allTask);
    const ongoing = allTask.filter(task => task.priority === 'High')
    
    return (
        <div>
            
        </div>
    );
};

export default Ongoing;
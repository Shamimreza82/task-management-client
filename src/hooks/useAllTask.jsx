import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";



const useAllTask = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth()
  
    const email = {
        email: user?.email
    }

    console.log(user?.email);

    console.log(email);
    
    const { data: allTask = [], refetch } = useQuery({
        queryKey: ["allTask", user?.email],
        queryFn: async () => {
          const res = await axiosPublic.get(`/allTask/${user?.email}`);
          return res.data;
        },
      });

    return {allTask, refetch}
};

export default useAllTask;
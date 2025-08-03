import instance from "../instances/instances"
import jobServices from "../services/jobServices";

const jobLoader=async ()=>{
    try{
        const jobs=await jobServices.getJob();
        return jobs;
    }
    catch(error)
    {
        return [];
    }
}
export default jobLoader;
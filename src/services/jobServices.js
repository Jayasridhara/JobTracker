import instance from "../instances/instances"

const jobServices={

    getJob:async ()=>{
        try{

            const response=await instance.get('/');
            return response.data;
        }
        catch(error)
        {
                return {error:'Failed to fetch jobs',error:error.message}
        }
    }
}
export default jobServices;
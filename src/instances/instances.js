import axios from "axios"

const baseURL='https://685ac3af9f6ef9611157b188.mockapi.io/jobs'

const instance=axios.create(
    {   

        baseURL:baseURL,
        headers:{
            'Content-Type':'application/json',
            'Accept':'application/json'
        }
    }
)

export default instance;

// import axios, { AxiosResponse } from "axios";
// Best Practice => import functionality and types separately
import axios from "axios"
import type { AxiosResponse } from "axios"

// demo url and response => "https://jsonplaceholder.typicode.com/todos/1"
// {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// }

interface Todo {
    userId: number
    id: number
    title: string
    completed: boolean
}

const fetchData = async ()=>{
    try {
        const response: AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/1")

        console.log(response.data)
    } catch (error: any) {
        if(axios.isAxiosError(error)){
            console.log(error.message)

            if(error.response){
                console.log(error.response.status)
            }
        }
    }
}
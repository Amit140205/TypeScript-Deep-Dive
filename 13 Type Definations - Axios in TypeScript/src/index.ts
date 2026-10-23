// install library and also its types
// npm i some-library
// npm i -D @types/some-library or some-library.d.ts

import axios from "axios";

axios.get("https://example.com/data")
.then((response) => {
    console.log(response.data)
})

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


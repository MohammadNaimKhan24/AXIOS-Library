// USE AXIOS

// GET
axios.get("https://jsonplaceholder.typicode.com/posts")
.then(res =>  console.log(res.data))
.catch((err) => console.log(err))

// POST
axios.post("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
})
.then(res =>  console.log(res.data))
.catch((err) => console.log(err))


// PUT
axios.put("https://jsonplaceholder.typicode.com/posts/1", {
    id: 1,
    body: JSON.stringify({
        title: 'fooma',
        body: 'barma',
        userId: 1,
      })
})
.then(res =>  console.log(res.data))
.catch((err) => console.log(err))


//  PATCH
axios.patch("https://jsonplaceholder.typicode.com/posts/1", {
    body: JSON.stringify({
       body: "Naimmmmm"
      })
})
.then(res =>  console.log(res.data))
.catch((err) => console.log(err))

// DELETE
axios.delete("https://jsonplaceholder.typicode.com/posts/1")
.then(res => console.log(res))
.catch(err => console.log(err))


// WORK WITH ASYNC await
// GET DATA
const getRequest = async (config) => {
    return await axios(config);
}

const getData = () => {
    getRequest("https://jsonplaceholder.typicode.com/posts")
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

getData();

// POST DATA
const createRequest = async (config) => {
    return await axios(config);
}

const createData = () => {
    createRequest({
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "POST",
        data: JSON.stringify({
            title: "foo",
            body: "barsfdsdsf",
            userId: 1,
        })
    } 
      
    )
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

createData();

// UPDATA DATA
const updateRequest = async (config) => {
    return await axios(config);
}

const updateData = () => {
    updateRequest({
        url: "https://jsonplaceholder.typicode.com/posts/1",
        method: "PUT",
        id: 1,
        data: JSON.stringify({
            title: "foofefsdffdsfgdg",
            body: "barsfdsdsffgdgdg",
            userId: 1,
        })
    } 
      
    )
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

updateData();


// DELETE DATA
const deleteRequest = async (config) => {
    return await axios(config);
}

const deleteData = () => {
    deleteRequest({
        url: "https://jsonplaceholder.typicode.com/posts/1",
        method: "DELETE"
    }   
    )
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

deleteData();
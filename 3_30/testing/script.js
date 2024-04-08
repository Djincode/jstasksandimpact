// const promise1 = new Promise((resolve,reject)=>{
//     resolve("DATA")
// }).then((data)=> console.log(data))
//    .catch((err)=> console.log(err));



//    const getUserId = ()=>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//          let UserId = 5;
//          resolve(UserId);
//         },1000)
//     })
//    }

//    const getPostByUserId = ()=>{
//    return new Promise((resolve)=>{
//     setTimeout(()=>{
//      const filtered = users
//      .filter((user)=> user.userId == userId)
//      .map((user)=> user.post)
//      resolve(filtered);
//     },500)
//    })
//    }

//    getUserId()
//    .then((userId)=> getPostByUserId(userId))
//    .then((post)=> console.log(post));


  // const url = "https://jsonplaceholder.typicode.com/posts/1";

//    const getApi = ()=>{
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((res)=> res.json())
//     .then((data)=> {
//         fetch(`"https://jsonplaceholder.typicode.com/comments?postId=${data.id}`)
//         .then((res)=> res.json())
//         .then((data)=> console.log(data));
//     });
//    }

const getApi = async ()=>{
    const resposts = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    const post = await resposts.json()

    const comments = await (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)).json()
    console.log(comments);
}
   getApi();
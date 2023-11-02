

const todos=[
    {title:"title1",description:"Test1"},
    {title:"title2",description:"Test2"},
    {title:"title3",description:"Test3"},
]

const toDoEl=document.getElementById('todoList')

function todosList() {
    setTimeout(()=>{
        todoItem=""
        todos.forEach((item)=>{
            todoItem+=`
                <li>
                    <h1>${item.title}</h1>
                    <p>${item.description}</p>
                </li>
            `
        })
        toDoEl.innerHTML=todoItem
    },1000)
}


function newTodo(todo,callback) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            todos.push(todo)
            const e=false
            if(!e){
                resolve("Her sey duzdur!")
            }else{
               reject("Xeta bas verdi!") 
            }
            callback()
        },2000)
    })
    
}


newTodo({title:"title4",description:"Test4"},todosList).then(item=>{
    item.forEach()
}).catch((reject)=>{
    console.log(reject);
})
// todosList()



const p1=Promise.resolve("P1")
const p2=new Promise((resolve,reject)=>{
   setTimeout(()=>{
    resolve("P2")
   },4000)
})

const p3=fetch("https://jsonplaceholder.typicode.com/posts")
.then(res=>res.json()).then(data=>{
    console.log(data);
    return data
})
const p4=axios("https://jsonplaceholder.typicode.com/albums").then(res=>res.json()).then(data=>{
    console.log(data);
    return data
})



Promise.all([p1,p2,p3,p4]).then((promises)=>{
    console.log('promises',promises);
})


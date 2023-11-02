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
    setTimeout(()=>{
        todos.push(todo)
        callback()
    },2000)
}


newTodo({title:"title4",description:"Test4"},todosList)
// todosList()
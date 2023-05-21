let input = document.getElementById("input");
let todoList = document.getElementsByClassName("todo-list");
let btn = document.getElementById("btn");
let btn1 = document.getElementById("btn1");

// const addToDo = () => {
//     let source = document.createElement("li");
//     source.innerText = input;
//     todoList.appendChild(source);
// }

let randNum = Math.floor(Math.random() * 15);
btn.addEventListener("click", () => {
    let source = document.createElement("li");
    source.innerText = input.value;
    todoList[0].appendChild(source);
    todoList = document.getElementsByClassName("todo-list")[0];
    localStorage.setItem(`${randNum}`, `${input.value}`);
    // localStorage.setItem(`${key}`, `${input.value}`);
    input.value = "";
});

window.onload = () => {
    if (localStorage.length > 0) {
        for (const key in localStorage) {
            if (Object.hasOwnProperty.call(localStorage, key)) {
                const element = localStorage[key];
                let source = document.createElement("li");
                let todoList = document.getElementsByClassName("todo-list");
                source.innerText = element;
                todoList[0].appendChild(source);
            }
        }
    }
}

btn1.addEventListener("click", () => {
    localStorage.clear();
    Array.from(document.querySelector(".todo-list").getElementsByTagName("li")).forEach(element => {
        element.remove();
    });
})


// If user press Enter key then add todo.
// input.addEventListener("keypress", (key) => {
//     if (key.key == "Enter") {
//         let source = document.createElement("li");

//         source.innerText = input.value;
//         todoList[0].appendChild(source);
//         let id = 1;
//         localStorage.setItem(`${id}`, `${input.value}`);
//         id++;
//         input.value = "";
//     }
// })
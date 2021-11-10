const inputdata = document.querySelector('.text-area input');
const inputbtn = document.querySelector('.text-area button');
const todoData = document.querySelector('.todoList');
const clearAllData = document.querySelector('.todo-clear-button li input');

inputdata.onkeyup = () => {
    let userdata = inputdata.value;
    if (userdata.trim() != 0) {
        inputbtn.classList.add("active");
    } else {
        inputbtn.classList.remove("active");
    }
}
showtasks();


inputbtn.onclick = () => {
    let userData = inputdata.value;
    let getStorageData = localStorage.getItem("New Todo");
    if (getStorageData == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getStorageData);
    }
    listArr.push(userData);
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showtasks();
    inputbtn, classList.remove("active");
}

function showtasks() {
    let getStorageData = localStorage.getItem("New Todo");
    if (getStorageData == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getStorageData);
    }
    const pendingItem = document.querySelector(".pendingItem");
    pendingItem.textContent = listArr.length;

    let newlist = "";
    listArr.forEach((element, index) => {
        newlist += `<li> ${element} <span onclick="deletetask(${index})"; ><i class="fas fa-trash"></i></span></li>`;
    });
    todoData.innerHTML = newlist;
    inputdata.value = "";
}

function deletetask(index) {
    let getStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getStorage);
    listArr.splice(index, 1);

    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showtasks();
}

// Clear All Task
clearAllData.onclick = () => {
    listArr = [];
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showtasks();
}
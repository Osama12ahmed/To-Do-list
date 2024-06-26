let task = document.getElementById("task");
let list = document.getElementById("list");

function add() {
    if (task.value === "") {
        alert("You must to add task !");
    } else {
        let li = document.createElement("li")
        li.innerHTML = task.value;
        list.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    task.value = "";
    save();
}
list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("click")
        save();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        save();
    }
}, false)
function save() {
    localStorage.setItem("data", list.innerHTML)
}
function show() {
    list.innerHTML = localStorage.getItem("data")
}
show();
let input = document.getElementById('input-value');
let submitButton = document.getElementById('submit');
let list = document.getElementById('list');
// let listItems = document.getElementsByTagName('li');
let errorAlert = document.getElementById('error-text');
let trashCan = document.getElementById('trash');
let todos = [];

const blackBook = {
    todoList: {
        submitToDos: submitButton.onclick = function(e) {
            e.preventDefault();
            if (input.value == "") {
                return errorAlert.innerText = "enter something to do"
            } else {
                todos.push(input.value);
                for (let i = 0; i < todos.length; i++) {
                    list.innerHTML = `<li>${todos.join("</li><li>")}</li>`;
                }
                return input.value = "";
            }
        },
        deleteItems: trashCan.onclick = function() {
            while (list.firstChild) {
              list.removeChild(list.firstChild);
              todos = [];
            }
        }
    }
}

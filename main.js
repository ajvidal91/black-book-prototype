let input = document.getElementById('input-value');
let submitButton = document.getElementById('submit');
let list = document.getElementById('list');
let listItems = document.getElementsByTagName('li')
let errorAlert = document.getElementById('error-text');
let trashCan = document.getElementById('trash');
let todos = [];
// console.log(listItem) /


const blackBook = {
    submitToDos: submitButton.onclick = function(e) {
        e.preventDefault();
        if (input.value == "") {
            return errorAlert.innerText = "enter something to do"
        } else {
            todos.push(input.value);
            for (let i = 0; i < todos.length; i++) {
                list.innerHTML = `<li>${todos.join("</li><li>")}</li>`;
            }
            // clears the input after user enters todo
            return input.value = "";
        }
    },
    deleteItems: trashCan.onclick = function() {
         // list = document.getElementById("top");
        while (list.firstChild) {
          list.removeChild(list.firstChild);
        }
        // return list.remove();
    }
}

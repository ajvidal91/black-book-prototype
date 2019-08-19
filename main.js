let input = document.getElementById('input-value');
let submitButton = document.getElementById('submit');
let list = document.getElementById('list');
let listItem = document.getElementsByClassName('list-item');
let errorAlert = document.getElementById('error-text');
let trashCan = document.getElementById('trash');
let todos = [];

const blackBook = {
  submitToDos: submitButton.onclick = function(e) {
    e.preventDefault();
    if (input.value == ""){
      return errorAlert.innerText = "enter something to do"
    }else{
      todos.push(input.value);
      for (let i = 0; i < todos.length; i++){
        list.innerHTML = `<li class='list-item'>${todos.join("</li><li>")} <i class="fas fa-trash" id="trash"></i></li>`;
      }
      return input.value = "";
    }
  },
  deleteItem: trashCan.onclick = function(e) {
     return listItem.remove();
     // let whiteSpace =  document.createTextNode("");
     // return listItem.appendChild(editInput)
  }
}

let input = document.getElementById('input-value');
let submitButton = document.getElementById('submit');
let list = document.getElementById('list');
let listItem = document.createElement('li');
let errorAlert = document.getElementById('error-text');
let todos = [];

const blackBook = {
  submitToDos: submitButton.onclick = function(e) {
    e.preventDefault();
    let inputVal = input.value
    if (inputVal === ""){
      return errorAlert.innerText = "enter something to do"
    }else{
      todos.push(inputVal);
      todos.join("");
      for (let i = 0; i < todos.length; i++){
          // list.append(`<li>${todos[i]}</li>`);
      }
      console.log(todos)
    }
    return list.innerHTML = `<li>${todos.join("</li><li>")} </li>`;
  }
}

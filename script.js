let n = document.querySelector('#title');
let m = document.querySelector('#value');
let date = new Date();

let str = "ToDo - "+(date.getDate()).toString().padStart(2,'0')+'/'+(date.getMonth()+1).toString().padStart(2,'0')+'/'+date.getFullYear();
m.innerText = str;

function focusin(){
    n.innerHTML = '<img src="images/todo.png" alt="ToDo" height="40px" width="50px" style="margin: 5px 20px;"><input type="text" name="todo" id="value2" onfocusout="focuslost()" onkeypress="check(event)">';
    document.querySelector('#value2').value = str;
    document.querySelector('#value2').focus();
};

function focuslost(){
    let topic = document.querySelector('#value2').value;
    n.innerHTML = '<img src="images/todo.png" alt="ToDo" height="40px" width="50px" style="margin: 5px 20px;"><span id="value" onclick="focusin()">'+topic+'</span>';
    m = document.querySelector('#value');
}

function check(event){
    if(event.keyCode == 13){
        focuslost();
    }
}
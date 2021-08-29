//-----------------------------------------------------------------------------------------------------------\\
{
let n = document.querySelector('#title');
let m = document.querySelector('#value');
let date = new Date();

let str = "ToDo - "+(date.getDate()).toString().padStart(2,'0')+'/'+(date.getMonth()+1).toString().padStart(2,'0')+'/'+date.getFullYear();
m.innerText = str;

function focusin(){
    n.innerHTML = '<img src="images/todo.png" alt="ToDo" height="40px" width="50px" style="margin: 5px 20px;" onclick="focusin()"><input type="text" name="todo" id="value2" onfocusout="focuslost()" onkeypress="check(event)">';
    document.querySelector('#value2').value = str;
    document.querySelector('#value2').focus();
};

function focuslost(){
    let topic = document.querySelector('#value2').value;
    n.innerHTML = '<img src="images/todo.png" alt="ToDo" height="40px" width="50px" style="margin: 5px 20px;" onclick="focusin()"><span id="value" onclick="focusin()">'+topic+'</span>';
    m = document.querySelector('#value');
}

function check(event){
    if(event.keyCode == 13){
        focuslost();
    }
}
}
//-----------------------------------------------------------------------------------------------------------\\
{
let v = localStorage.getItem('name');
if(v==null){
    v = 'Your Name';
}
let nn = document.querySelector('#n');
nn.innerHTML = '<span style="font-size: 20px">To do list for - </span><span style="font-size:30px" id="username" onclick="user()">'+v+'</span>';
localStorage.clear();
function check2(event){
    if(event.keyCode == 13){
        document.querySelector('#userinp').blur();
    }
}

function user(){
    let zz = document.querySelector('#username'); 
    let z = zz.innerText;
    document.querySelector('#username').innerHTML = '<input type="text" name="usernm" id="userinp" onkeypress="check2(event)" onfocusout="focusl()" onclick="tp()">';
    document.querySelector('#userinp').value = z;
    document.querySelector('#userinp').focus();
}
function tp(){}
function focusl(){
    let q = document.querySelector('#userinp');
    let z = q.value;
    document.querySelector('#username').innerHTML = z;
}
}
//-----------------------------------------------------------------------------------------------------------\\
let count = 0;
{
    let entry = document.querySelector('#entry');
    let add = document.querySelector('#add');
    let clear = document.querySelector('#clear');
    entry.addEventListener('keypress',(event)=>{
        if(event.keyCode==13){
            add.click();
        }
    })

    clear.addEventListener('click',()=>{
        document.querySelector('#entry').value = "";
    })

    add.addEventListener('click',()=>{
        let list = document.querySelector('#main');
        let k = document.querySelector('#entry').value;
        let arr = [].map.call(k,c=>c);
        let len = k.length;
        let reallen = 0;
        for(let i = 0;i<len;i++){
            if(arr[i]!=' '){
                reallen++;
            }
        }
        if(reallen<=0){
            window.alert('Empty task cannot be inserted.');
            return;
        }
        count++;
        let h = 
        list.innerHTML = 
        `
        <tr class='${count}'>
        <td class="check" style="width:40px;"><input type="checkbox" name="Done" class="rcheck elements" onclick="checkk(this)"></td>
        <td class="task" style="width:auto;"><input type="text" name="work" class="rtask elements" value="${k}" onfocusout="dis(this)" onkeypress="taskkey(this,event)" disabled></td>
        <td class="edit" style="width:40px;"><input type="button" value="🖊" class="redit elements" onclick="edit(this)"></td>
        <td class="star" style="width:40px;"><input type="button" value="⭐" class="rstar elements"></td>
        <td class="color" style="width:40px;"><select name="colsel" class="rcolor elements" onchange="col(this)">
            <option class="options" value="None" selected>🚫</option>
            <option class="options" value="Blue">🔵</option>
            <option class="options" value="Yellow">🟡</option>
            <option class="options" value="Green">🟢</option>
            <option class="options" value="Purple">🟣</option>
            <option class="options" value="Red">🔴</option>
        </select></td>
        <td class="del" style="width:40px;"><input type="button" value="❌" class="rdel elements" onclick="del(this)"></td>
        </tr>
        ` + list.innerHTML;
        clear.click();
    })
}
//-----------------------------------------------------------------------------------------------------------\\
function edit(editor){
    let parent = editor.parentElement.parentElement;
    parent.getElementsByClassName('rtask')[0].disabled = false;
    parent.getElementsByClassName('rtask')[0].focus();
    let val = parent.getElementsByClassName('rtask')[0].value;
    parent.getElementsByClassName('rtask')[0].value = '';
    parent.getElementsByClassName('rtask')[0].value = val;
}
function dis(task){
    task.disabled = true;
}
function taskkey(task, event){
    if(event.keyCode == 13){
        dis(task);
    }
}

function del(delbtn){
    let parent = delbtn.parentElement.parentElement;
    parent.remove();
}

function col(selector){
    let col = selector.value;
    let row = selector.parentElement.parentElement;
    switch(col){
        case 'None': 
        row.getElementsByClassName('check')[0].style.backgroundColor = "rgb(247,157,125)";
        row.getElementsByClassName('task')[0].style.backgroundColor = "rgb(247,157,125)";
        break;
        case 'Blue': 
        row.getElementsByClassName('check')[0].style.backgroundColor = "#7abbde";
        row.getElementsByClassName('task')[0].style.backgroundColor = "#7abbde";
        break;
        case 'Yellow': 
        row.getElementsByClassName('check')[0].style.backgroundColor = "#ffc066";
        row.getElementsByClassName('task')[0].style.backgroundColor = "#ffc066";
        break;
        case 'Green': 
        row.getElementsByClassName('check')[0].style.backgroundColor = "#7ed779";
        row.getElementsByClassName('task')[0].style.backgroundColor = "#7ed779";
        break;
        case 'Purple': 
        row.getElementsByClassName('check')[0].style.backgroundColor = "#d38ffe";
        row.getElementsByClassName('task')[0].style.backgroundColor = "#d38ffe";
        break;
        case 'Red': 
        row.getElementsByClassName('check')[0].style.backgroundColor = "#ef5f6b";
        row.getElementsByClassName('task')[0].style.backgroundColor = "#ef5f6b";
        break;
    }
    row.getElementsByClassName('check')[0].style.borderRadius = "5px";
    row.getElementsByClassName('task')[0].style.borderRadius = "8px";
}

function checkk(checkbox){
    let list = document.querySelector('#main');
    if(checkbox.checked){
        let parentName = document.getElementsByClassName('rcheck')[0].parentElement.parentElement.className;
        let html = document.getElementsByClassName('rcheck')[0].parentElement.parentElement.innerHTML;
        let value = document.getElementsByClassName('rcheck')[0].parentElement.parentElement.getElementsByClassName('rtask')[0].value;
        let color = document.getElementsByClassName('rcheck')[0].parentElement.parentElement.getElementsByClassName('rcolor')[0].value;
        checkbox.parentElement.parentElement.getElementsByClassName('rdel')[0].click();
        let newobj = document.createElement('tr');
        newobj.className = parentName;
        newobj.innerHTML = html;
        newobj.getElementsByClassName('rcheck')[0].checked = true;
        newobj.getElementsByClassName('rtask')[0].value = '';
        newobj.getElementsByClassName('rtask')[0].value = value;
        newobj.getElementsByClassName('rcolor')[0].value = color;
        newobj.getElementsByClassName('rtask')[0].style.textDecoration = 'line-through';
        list.appendChild(newobj);
    }
    else{
        let parentName = document.getElementsByClassName('rcheck')[0].parentElement.parentElement.className;
        let html = document.getElementsByClassName('rcheck')[0].parentElement.parentElement.innerHTML;
        checkbox.parentElement.parentElement.getElementsByClassName('rdel')[0].click();
        let newobj = document.createElement('tr');
        newobj.className = parentName;
        newobj.innerHTML = html;
        newobj.getElementsByClassName('rtask')[0].style.textDecoration = 'none';
        list.insertBefore(newobj,list.childNodes[0]);
    }
}
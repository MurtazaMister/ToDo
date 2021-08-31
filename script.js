//-----------------------------------------------------------------------------------------------------------\\

function createRow(count, k){
    let newobj = document.createElement('tr');
            newobj.className = count+" trr";
            newobj.innerHTML = 
            `
            <td class="check" style="width:40px;"><input type="checkbox" name="Done" class="rcheck elements" onclick="checkk(this)"></td>
            <td class="task" style="width:auto;"><input type="text" name="work" class="rtask elements" style="font-family: 'Alegreya Sans', sans-serif;" value="${k}" onfocusout="dis(this)" onkeypress="taskkey(this,event)" disabled></td>
            <td class="edit" style="width:40px;"><input type="button" value="🖊" class="redit elements" onclick="edit(this)"></td>
            <td class="star" style="width:40px;"><input type="button" value="⭐" class="rstar elements" onclick="star(this)"></td>
            <td class="color" style="width:40px;"><select name="colsel" class="rcolor elements" onchange="col(this)">
                <option class="options" value="None" selected>🚫</option>
                <option class="options" value="Blue">🔵</option>
                <option class="options" value="Yellow">🟡</option>
                <option class="options" value="Green">🟢</option>
                <option class="options" value="Purple">🟣</option>
                <option class="options" value="Red">🔴</option>
            </select></td>
            <td class="del" style="width:40px;"><input type="button" value="❌" class="rdel elements" onclick="del(this)"></td>
            ` ;
    return newobj;
}

function insert(count, k){
    let list = document.querySelector('#main');
    count++;
        if(list.hasChildNodes()){
            let y = 0;
            while(document.getElementsByClassName('rstar')[y].style.backgroundColor === 'rgb(255, 200, 61)'){
                y++;
            }
            let newobj = createRow(count, k);
            list.insertBefore(newobj,list.childNodes[y]);
        }
        else{
            let newobj = createRow(count,k);
            list.appendChild(newobj);
        }
        clear.click();
        return count;
}
//-----------------------------------------------------------------------------------------------------------\\

function checkNull(valuee){
    if(valuee.length === 0){
        return 0;
    }
    else{
        let arr = [].map.call(valuee,x=>x);
        let len = valuee.length;
        let reallen = 0;
        for(let i = 0;i<len;i++){
            if(arr[i]!=' '){
                reallen++;
            }
        }
        if(reallen>0){
            return 1;
        }
        else{
            return 0;
        }
    }
}

//-----------------------------------------------------------------------------------------------------------\\
function npgbtn(event){
    if(event.keyCode == 13){
        document.getElementById('nbtn').click();
    }
}
function nextpage(){
    localStorage.clear();
    localStorage.setItem('name',document.querySelector('#user').value);
    let v = localStorage.getItem('name');

    let len = v.length;
    let reallen = 0;
    if(len>0 && v!==null){
        let arr = [].map.call(v,v=>v);
        for(let i = 0;i<len;i++){
            if(arr[i]!=' '){
                reallen++;
            }
        }
    }
    if(reallen == 0){v=null;}
    if(v===null){
        v = 'Your Name';
    }
    let nn = document.querySelector('#n');
    nn.innerHTML = '<span style="font-size: 20px">To do list for - </span><span style="font-size:30px" id="username" onclick="user()">'+v+'</   span>';
    localStorage.clear();

    document.getElementsByTagName('span')[0].style.display = 'none';
    document.getElementsByTagName('input')[0].style.display = 'none';
    document.getElementsByTagName('input')[1].style.display = 'none';
    document.getElementById('pre').style.background = 'rgb(225, 225, 225) url(\'images/preloader.gif\') center center no-repeat';
    document.getElementById('pre').style.backgroundSize = '40%';
    window.setTimeout(()=>{
        nnext();
    },2500);
}
function nnext(){
    let pree = document.getElementById('pre');
    pree.style.display = 'none';
    document.getElementById('entry').focus();
}
//-----------------------------------------------------------------------------------------------------------\\
{
let n = document.querySelector('#title');
let m = document.querySelector('#value');
let date = new Date();

let str = "ToDo - "+(date.getDate()).toString().padStart(2,'0')+'/'+(date.getMonth()+1).toString().padStart(2,'0')+'/'+date.getFullYear();
m.innerText = str;

function focusin(){
    n.innerHTML = '<img src="images/todo.png" alt="ToDo" height="40px" width="50px" style="margin: 5px 20px;" onclick="focusin()"><input type="text" name="todo" id="value2" onfocusout="focuslost()" onkeypress="check(event)" style="width:100%;">';
    document.querySelector('#value2').value = str;
    document.querySelector('#value2').focus();
};

function focuslost(){
    let topic = document.querySelector('#value2').value;
    if(checkNull(topic)==0){
        topic = "ToDo - "+(date.getDate()).toString().padStart(2,'0')+'/'+(date.getMonth()+1).toString().padStart(2,'0')+'/'+date.getFullYear();
    }
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

// Clearlist
    function kill(){
        if(confirm('Are you sure you want to clear your list?')){
        let target = document.querySelector('#main');
        while(target.hasChildNodes()){
            target.removeChild(target.firstChild);
        }
    }
    }   
//-----------------------------------------------------------------------------------------------------------\\

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
    if(checkNull(z)==1){
        document.querySelector('#username').innerHTML = z;
    }
    else{
        document.querySelector('#username').innerHTML = "Your name";
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
        if(checkNull(k)){
            let arr = [].map.call(k,c=>c);
            let u = "";
            for(let i = 0;i<arr.length;i++){
                if(arr[i]==';'){
                    if(checkNull(u)){
                    count = insert(count,u);
                    u = "";
                    }
                    else{
                        u="";
                    }
                }
                else{
                    u+=arr[i];
                }
            }
            if(checkNull(u)){
                count = insert(count,u);
            }
        }
        else{
            window.alert('Empty task cannot be inserted.');
            return;
        }
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
        break;
        case 'Blue': 
        row.getElementsByClassName('check')[0].style.backgroundColor = "#7abbde";
        break;
        case 'Yellow': 
        row.getElementsByClassName('check')[0].style.backgroundColor = "yellow";
        break;
        case 'Green': 
        row.getElementsByClassName('check')[0].style.backgroundColor = "#7ed779";
        break;
        case 'Purple': 
        row.getElementsByClassName('check')[0].style.backgroundColor = "#ac2aff";
        break;
        case 'Red': 
        row.getElementsByClassName('check')[0].style.backgroundColor = "#f53646";
        break;
    }
    row.getElementsByClassName('check')[0].style.borderRadius = "5px";
    row.getElementsByClassName('task')[0].style.borderRadius = "8px";
}

function checkk(checkbox){
    let list = document.querySelector('#main');
    if(checkbox.checked){
        let parentName = checkbox.parentElement.parentElement.className;
        document.getElementsByClassName(parentName)[0].getElementsByClassName('redit')[0].disabled =true;
        document.getElementsByClassName(parentName)[0].getElementsByClassName('rstar')[0].disabled =true;
        document.getElementsByClassName(parentName)[0].getElementsByClassName('rcolor')[0].disabled =true;
        document.getElementsByClassName(parentName)[0].getElementsByClassName('rstar')[0].style.backgroundColor ='transparent';
        document.getElementsByClassName(parentName)[0].getElementsByClassName('rtask')[0].style.textDecoration = 'line-through';
        list.appendChild(document.getElementsByClassName(parentName)[0]);
    }
    else{
        let y = 0;
        while(document.getElementsByClassName('rtask')[y].style.textDecoration !== 'line-through'){
            y++;
        }
        checkbox.parentElement.parentElement.getElementsByClassName('rtask')[0].style.textDecoration = 'none';
        checkbox.parentElement.parentElement.getElementsByClassName('redit')[0].disabled = false;
        checkbox.parentElement.parentElement.getElementsByClassName('rcolor')[0].disabled = false;
        checkbox.parentElement.parentElement.getElementsByClassName('rstar')[0].disabled = false;
        list.insertBefore(checkbox.parentElement.parentElement,document.getElementsByTagName('tr')[y+1]);
    }
}

function star(starbtn){
    let list = document.querySelector('#main');
    if(starbtn.style.backgroundColor !== 'rgb(255, 200, 61)'){
        starbtn.style.backgroundColor = 'rgb(255, 200, 61)';
        list.insertBefore(starbtn.parentElement.parentElement,list.childNodes[0]);
    }
    else{
        let y = 0;
        while(document.getElementsByClassName('rstar')[y].style.backgroundColor === 'rgb(255, 200, 61)'){
            y++;
        }
        starbtn.style.backgroundColor = "transparent";
        list.insertBefore(starbtn.parentElement.parentElement,list.childNodes[y]);
    }
}
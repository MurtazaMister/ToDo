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


    let add = document.querySelector('#add');
    let clear = document.querySelector('#clear');
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
        list.innerHTML += 
        `
        <tr class=${count}>
        <td class="check" style="width:40px;"><input type="checkbox" name="Done" class="rcheck elements"></td>
        <td class="task" style="width:auto;"><input type="text" name="work" class="rtask elements" value='${k}' disabled></td>
        <td class="edit" style="width:40px;"><input type="button" value="🖊" class="redit elements"></td>
        <td class="star" style="width:40px;"><input type="button" value="⭐" class="rstar elements"></td>
        <td class="color" style="width:40px;"><select name="colsel" class="rcolor elements">
            <option class="options" value="none" selected>🚫</option>
            <option class="options" value="Blue">🔵</option>
            <option class="options" value="Yellow">🟡</option>
            <option class="options" value="Green">🟢</option>
            <option class="options" value="Purple">🟣</option>
            <option class="options" value="Red">🔴</option>
        </select></td>
        <td class="del" style="width:40px;"><input type="button" value="❌" class="rdel elements"></td>
        </tr>
        `;
        clear.click();
    })
}


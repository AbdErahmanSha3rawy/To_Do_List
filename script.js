let Write=document.querySelector('#Write');
let discription=document.querySelector('.discription');
let ok=document.querySelector('.ok');
let ftask=document.querySelector('.pp');
let add=document.querySelector('.add');
let task=document.querySelector('.task');
let task_complited=document.querySelector('.task_complited')
let task_yes=document.querySelector('.p');
let delet=document.querySelector('.deleteitem');
let ok_comlited=document.querySelector('.ok_complited');
let update_comlited=document.querySelector('.update_complited');
let update_item=document.querySelector('.update');
let delete_complited=document.querySelector('.delete_complited');
let text=document.querySelector('.text');
let  mode;
let x;
let counter_task=0;
let counter_task_complited=0;


 let arr;
 
if(localStorage.taskad != null){
    arr  = JSON.parse(localStorage.taskad);
}
else
{
    arr = []; 
}
 let new_arr;
if(localStorage.complitedtask != null){
    new_arr = JSON.parse(localStorage.complitedtask);
}
else
{
    new_arr=[]; 
}
counter();
display();
display2();
function counter() {
    let total = arr.length + new_arr.length;
    let completed = new_arr.length;

    if (total === 0) {
        discription.textContent = '';
    } else {
        if(completed===1 && total===1){
        discription.textContent = `${completed} task complited from ${total} task`;
 
        }
        else if(completed===1 && total>1){
        discription.textContent = `${completed} task complited from ${total} tasks`;
        }
        else if(completed!=1 && total===1){
        discription.textContent = `${completed} tasks complited from ${total} task`;
        }
        else{
        discription.textContent = `${completed} tasks complited from ${total} tasks`;
        }
    }
}
add.onclick=function(){

    
if(Write.value !='' &&Write.value.length<=35 && mode!='update' && mode!='update_complited'){
counter_task+=1;

arr.push(Write.value);   
counter();
localStorage.setItem('taskad',JSON.stringify(arr));
display();

Write.value='';

}
else if(mode==='update' && Write.value.length<=35 ){
arr[x]=Write.value;

localStorage.setItem('taskad',JSON.stringify(arr));
display();
Write.value='';

}
else if(mode==='update_complited' && Write.value.length<=35 ){
new_arr[x]=Write.value;
counter();

localStorage.setItem('complitedtask',JSON.stringify(new_arr));
display2();
Write.value='';

}
else if(Write.value.length>35){
    alert('count of litters must be less than 35 ');
}
};
 function display(){

    let table ='';
        

    for (let i = 0; i < arr.length; i++) {
        table += `
        <tr>
            <td class="text">${arr[i]}</td>
             <td><button onclick = "okitem(${i}) " class="ok">✔</button></td>
             <td><button onclick = "updateitem(${i}) " class="update">🖊</button></td>
            <td><button onclick = "deleteitem(${i}) " class="deleteitem">✖</button></td>
        </tr> 
        
        `      
    }
    document.getElementById('tbody').innerHTML=table;

}
function updateitem(i){
    Write.value=arr[i];
    x=i;
       mode='update';

    
}
update_item.onclick=function(){
   updateitem();

}
function update_complited(i){
    Write.value=new_arr[i];
    x=i;
       mode='update_complited';
    
}
update_complited.onclick=function(){
   update_complited();
}
delet.onclick=function(){

deleteitem();

};

function okitem(i){
let item=arr.splice(i,1);
new_arr.push(item[0]);   
localStorage.setItem('taskad',JSON.stringify(arr));
localStorage.setItem('complitedtask',JSON.stringify(new_arr));
counter_task_complited++;
display();
display2();
counter();
 }

// ok.onclick=function(){ 
// okitem();
// // counter_task_complited++;
// // counter();

     
// };  
 function display2(){

    let table2 ='';
        

    for (let i = 0; i < new_arr.length; i++) {
        table2 += `        
            <tr>
   
            <td class="text" style="text-decoration:line-through" >${new_arr[i]}</td>
            <td><button onclick = "ok_complited(${i}) " class="ok_complited">⬆</button></td>
            <td><button onclick = "update_complited(${i}) " class="update_complited">🖊</button></td>
            <td><button onclick = "deletec(${i}) " class="delete_complited">✖</button></td>
        </tr> 
        
        `      
    }
    document.getElementById('tbody2').innerHTML=table2;
}
  function deleteitem(i){
  arr.splice(i,1);
  localStorage.taskad=JSON.stringify(arr);
    counter_task-=1;
counter();
  display();
  display2()
   }
function deletec(i){
  
  new_arr.splice(i,1);
  localStorage.complitedtask=JSON.stringify(new_arr);
  counter_task--;
    counter_task_complited-=1;
counter();
display();
  display2();
   }
deletec.onclick=function(){

deletec();

};
ok_complited.onclick=function(){

ok_complited();

};
 function ok_complited(i){
  let item2 = new_arr.splice(i,1);
    arr.push(item2[0]); 
localStorage.setItem('taskad',JSON.stringify(arr));
localStorage.setItem('complitedtask',JSON.stringify(new_arr));
counter_task_complited-=1;
display();
display2();
counter();
 }


delete_complited.onclick=function(){
deleteitem();

};

function searchData(value){

     table = '';
for (let i = 0; i < arr.length; i++) {

   if(arr[i].includes(value)){
     table += `
       <tr>
            <td class="text">${arr[i]}</td>
             <td><button onclick = "okitem(${i}) " class="ok">✔</button></td>
             <td><button onclick = "updateitem(${i}) " class="update">🖊</button></td>
            <td><button onclick = "deleteitem(${i}) " class="deleteitem">✖</button></td>
        </tr> 
        
        `  
   }

}
    document.getElementById('tbody').innerHTML=table;
}
function searchDatacomplited(value){

table2 ='';

    for (let x = 0; x < new_arr.length; x++) {
        if(new_arr[x].includes(value)){
        table2 += `        
            <tr>
            <td class="text">${new_arr[x]}</td>
            <td><button onclick = "ok_complited(${x}) " class="ok_complited">⬆</button></td>
            <td><button onclick = "update_complited(${x}) " class="update_complited">🖊</button></td>
            <td><button onclick = "deletec(${x}) " class="delete_complited">✖</button></td>
        </tr> 
        
        `      
    }
}
    document.getElementById('tbody2').innerHTML=table2;
}

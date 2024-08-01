let inp=document.querySelector("#input-box");
let btn=document.querySelector("button")
let lst=document.querySelector("#list-container")

function addTask(){
    if(inp.value===''){
        alert("enter a task !")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inp.value;
        lst.appendChild(li);

        let span= document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span);
    }
    inp.value=" ";
    saveData();
}

lst.addEventListener("click",function(event){
    if(event.target.tagName==='LI'){
        event.target.classList.toggle("checked");
        saveData()
    }
    else if(event.target.tagName==='SPAN'){
        event.target.parentElement.remove();
        saveData()
    }
},false)

function saveData(){
    localStorage.setItem("data",lst.innerHTML);
}
function showTask(){
    lst.innerHTML=localStorage.getItem("data");
}
showTask();
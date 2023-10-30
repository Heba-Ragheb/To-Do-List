document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("#task-submit").disabled = true;
    document.querySelector("#task-input").onkeyup = function(){
        if (document.querySelector("#task-input").value.length > 7){
            document.querySelector("#task-submit").disabled = false;
        }else{
            document.querySelector("#task-submit").disabled = true;
        }

    }
     

    document.querySelector("form").onsubmit = function(){
       
        var task = document.querySelector("#task-input").value;
        var tasklist= document.querySelector("#task-list");
        var tasks = document.querySelector("#tasks");
        var div = document.createElement("input");
        var done = document.createElement("input");
       div.classList.add("text");
        
        div.type ="text";
        done.type = "checkbox";
        
        div.value =task ;
        
        div.setAttribute("readonly","readonly");
        var clear = document.createElement("button");
        var edit = document.createElement("button");
        div.innerHTML=task;
        clear.innerHTML="clear";
        edit.innerHTML="edit";
       
       document.querySelector("#tasks").appendChild(done);
        document.querySelector("#tasks").appendChild(div);
        document.querySelector("#tasks").appendChild(clear);
        document.querySelector("#tasks").appendChild(edit);

        clear.addEventListener('click',function(){
           div.remove("div");
           clear.remove("button");
           edit.remove("button");
           done.remove("input");
          
        })
        edit.addEventListener('click',function(){
            if(edit.innerText.toLowerCase()=="edit"){
          div.removeAttribute("readonly") ;
          div.focus();
          edit.innerText="save";
          }else{
            div.setAttribute("readonly","readonly");
            edit.innerText="edit";

          }
           
         })
         done.addEventListener('change',function(){
         if(this.checked){
            div.style.textDecoration="line-through";
            div.setAttribute("readonly","readonly");
         
         }else{
            div.style.textDecoration="none";
            
         }
         })
         save_all.addEventListener('click',function(){
            edit.disabled=true;
            clear.disabled=true;
         })


        document.querySelector("#task-input").value ='';
        document.querySelector("#task-submit").disabled = true;
       save_all.disabled = false;
        return false;
    }
   
}
)
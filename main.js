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
       /** *const task_div = document.createElement("div");
       // div.value =task ;
        task_div .classList.add("task");
        tasks.appendChild(task_div );
       
        const task_div_content = document.createElement("div");
        task_div_content .classList.add("content");
        task_div.appendChild(task_div_content );

        const task_input = document.createElement("input");
        task_input.classList.add("text");

        task_input.type= text;
        task_input.value= task;
        task_input.setAttribute("readonly","readonly");
        task_div_content.appendChild(task_input ); 

        var clear = document.createElement("button");
        clear.classList.add("clear");
        clear.innerHTML="clear";
        task_div_content.appendChild(clear ); 

        var edit = document.createElement("button");
        edit.classList.add("edit");
        edit.innerHTML="edit";
        task_div_content.appendChild(edit ); 
        
        var done = document.createElement("input"); 
        done.type = "checkbox";
        div.classList.add("text");
        task_div_content.appendChild(done ); 
        clear.addEventListener('click',function(){
           /**  div.remove("div");
             clear.remove("button");
             edit.remove("button");
             done.remove("input");
             
           tasks.removeChild(task_div);
            
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
  )*/

       var div = document.createElement("input");
       
       div.classList.add("text");
        
        div.type ="text";
        
        
        div.value =task ;
        
        div.setAttribute("readonly","readonly");
        var done = document.createElement("button");
        var clear = document.createElement("button");
        var edit = document.createElement("button");
        div.innerHTML=task;
        clear.innerHTML="clear";
        edit.innerHTML="edit";
        done.innerHTML="done";
       
      
      
        document.querySelector("#tasks").appendChild(div);
        document.querySelector("#tasks").appendChild(done);
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
         done.addEventListener('click',function(){
            if(done.innerText.toLowerCase()=="done"){
         
            div.style.textDecoration="line-through";
            div.setAttribute("readonly","readonly");
            done.innerText="complete";
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
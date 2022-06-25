 
 window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        if(!task){
            alert("Please add a task");
            return;
        }

   
        /* <div class="task"> */
        const task_el = document.createElement("div");
        task_el.classList.add("task");
        
         /* <div class="content"> */
        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");
       
        task_el.appendChild(task_content_el);

        
        /* <input type="text" class="text" readonly> */
        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");
    
        task_content_el.appendChild(task_input_el);

        /*  <div class="actions"> */
        const task_actions = document.createElement("div");
        task_actions.classList.add("actions");

        /* <button class="edit">Edit</button>
                    <button class="delete">Delete</button> */
        const task_btn_edit = document.createElement("button");
        task_btn_edit.classList.add("edit");
        task_btn_edit.innerHTML = "Edit";

       
        const task_btn_delete = document.createElement("button");
        task_btn_delete.classList.add("delete");
        task_btn_delete.innerHTML = "Delete";



        /* inheritance */
        task_actions.appendChild(task_btn_edit);
        task_actions.appendChild(task_btn_delete);
        
        task_el.appendChild(task_actions);
        list_el.appendChild(task_el);
       
        input.value = "";

        task_btn_edit.addEventListener('click', ()=>{
            if(task_btn_edit.innerText.toLowerCase() == "edit"){
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_btn_edit.innerText = "Save";
            }else{
                task_input_el.setAttribute("readonly", "readonly");
                task_btn_edit.innerText = "Edit";
            }
        })
        task_btn_delete.addEventListener('click', () =>{
            list_el.removeChild(task_el);
        })
        
    })
    
   
 })
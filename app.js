let input = document.querySelector(".taskInput");
let btn1 =  document.querySelector(".btn-add");
let text = document.querySelector(".text");

btn1.addEventListener("click",()=>{
    if(input.value == ""){
        alert("Please enter your task");
    }else{
        let newElement =  document.createElement("ul");
        newElement.innerHTML = `${input.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newElement);
        input.value = "";
        newElement.querySelector("i").addEventListener("click",()=>{
            newElement.remove();
        })
    }
})

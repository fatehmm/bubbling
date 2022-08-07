let context = document.querySelector(".context");
window.addEventListener("contextmenu", function(e){
    
    context.classList.toggle("context-0");
    context.classList.toggle("context-1");
    context.style.top = e.clientY + "px";
    context.style.left = e.clientX + "px";
    context.scrollIntoView();
    e.preventDefault();
})
window.addEventListener("click", function(e){
    if(context.className.includes("context-1")){
        context.classList.add("context-0");
        context.classList.remove("context-1");
    } 
    
})

context.addEventListener("click", function(e){
    e.stopPropagation()
})


let change_link = document.getElementById("change-color");

change_link.addEventListener("click", function(e){
    e.preventDefault();
    document.body.style.backgroundColor = RandomColor();

})


function RandomColor(){
    let red = Math.round((Math.random() * 255));
    let green = Math.round((Math.random() * 255));
    let blue = Math.round((Math.random() * 255));
    console.log(red);
    console.log(`rgb(${red}, ${green}, ${blue})`);
    return `rgb(${red}, ${green}, ${blue})`;

}
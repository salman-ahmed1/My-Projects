
for (i=0;i<document.querySelectorAll("li").length;i++) {
document.querySelectorAll("li")[i].addEventListener("click", function() {

this.firstElementChild.checked=true ;
this.classList.toggle("crossed")


setTimeout(() => {for (i=0;i<document.querySelectorAll("li").length;i++) {
    document.querySelectorAll("li")[i].addEventListener("click",function() {
    
    this.firstElementChild.checked=false ;
    
    
    })}
    
}, 100);

    
})}

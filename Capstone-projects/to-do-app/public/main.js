
for (i=0;i<ocument.querySelectorAll("input").length;i++) {
document.querySelectorAll("input[type='checkbox']").addEvemtListner("click",(e)=>

e.classlist.toggle("crossed")
)

}
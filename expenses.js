
document.getElementById("btn").addEventListener("click",addExpense);

function addExpense(e){
    // alert("Helo")
    e.preventDefault();
  
    let exp={
        amt:document.getElementById("fname").value,
         cat:document.getElementById("desc").value,
         man:document.getElementById("categ").value,


    }
    localStorage.setItem(exp.amt,JSON.stringify(exp))
    
    printExpenses(exp);
}
    
function printExpenses(exp){
    let formNODE = document.getElementById("formList");
    let p=exp.amt;
    let childNODE=`<li id=${exp.amt}>${exp.amt}-${exp.cat}-${exp.man}<button onclick=deleteUser('${exp.amt}')>Delete expenses</button><button onclick=editUser('${exp.amt}','${exp.cat}','${exp.man}')>Edit expenses</button></li>`
formNODE.innerHTML=formNODE.innerHTML+childNODE;

}  


    function deleteUser(exp){
        
        //console.log(p);
        localStorage.removeItem(exp);
        let parentNode=document.getElementById("formList");
        let childNODE=document.getElementById(exp);
        parentNode.removeChild(childNODE);
        localStorage.removeItem(exp);

    }





function editUser(amt1,cat1,man1){

    document.getElementById("fname").value=amt1;
    document.getElementById("desc").value=cat1;
    document.getElementById("categ").value=man1;
    deleteUser(amt1)

   
}
   

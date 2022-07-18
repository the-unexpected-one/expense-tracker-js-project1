
document.getElementById("btn").addEventListener("click",addExpense);

function addExpense(e){
    // alert("Helo")
    e.preventDefault();
  
    let exp={
        amt:document.getElementById("fname").value,
         cat:document.getElementById("desc").value,
         man:document.getElementById("categ").value,


    }
    // localStorage.setItem(exp.amt,JSON.stringify(exp))
    
    axios.post("https://crudcrud.com/api/48c54af507e049149b79ec0b263bf54a/ExpenseTracker1",exp)
    .then((response)=>{
        printExpenses(response.data);
        console.log(response) 
    }).catch((err)=>{
        console.log(err);
    })
    //printExpenses(exp);
}
    
function printExpenses(exp){
    let formNODE = document.getElementById("formList");
    let p=exp.amt;
    let childNODE=`<li id=${exp._id}>${exp.amt}-${exp.cat}-${exp.man}<button onclick=deleteUser('${exp._id}')>Delete expenses</button><button onclick=editUser('${exp._id}','${exp.amt}','${exp.cat}','${exp.man}')>Edit expenses</button></li>`
formNODE.innerHTML=formNODE.innerHTML+childNODE;

}  
window.addEventListener("DOMContentLoaded",()=>
{
   axios.get("https://crudcrud.com/api/48c54af507e049149b79ec0b263bf54a/ExpenseTracker1").then((response)=>{
       console.log(response)
       for(var i=0;i<response.data.length;i++){
           printExpenses(response.data[i])
       }
   }).catch((err)=>{
       document.body.innerHTML="<h4>Something went wrong<h4>"
       console.log(err)})
})
function deleteUser(Id){
    //    console.log(emailId)
    //     localStorage.removeItem(emailId);

        axios.delete(`https://crudcrud.com/api/48c54af507e049149b79ec0b263bf54a/ExpenseTracker1/${Id}`)
        .then((response)=>removeUserFromScreen(Id)).catch((err)=>console.log(err))
         //removeUserFromScreen(Id);
}
    function removeUserFromScreen(expID){
       
        //console.log(p);
        //localStorage.removeItem(expID);
        const parentNode=document.getElementById("formList");
        const childNODE=document.getElementById(expID);
        parentNode.removeChild(childNODE);
        //localStorage.removeItem(expID);
        //deleteUser(expID)

    }





function editUser(userId,amt1,cat1,man1){
   console.log(userId)
   deleteUser(userId);
    document.getElementById('fname').value=amt1;
    document.getElementById('desc').value=cat1;
    document.getElementById('categ').value=man1;
   

   
}
   

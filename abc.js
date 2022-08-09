var a=[{title:"abc",class:"10"},{school:"abc",roll:"12"}]
for(let i=0;i<a.length;i++){
    var b=a[i];
    var c=Object.keys(b)
    c.forEach(keys=>{
console.log(keys.length)
    })
}
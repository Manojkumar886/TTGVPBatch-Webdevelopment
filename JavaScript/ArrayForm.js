let studentvalues=["thivin","Manoj","Mohan","Ganesh","Pradeep","Mathan"];

var inserting=()=>
{
    let temp=document.getElementById('users')
    studentvalues.push(temp.value);
    alert("your value is added successfully"+temp.value)
}

let viewpoint=()=>
{
    let hi="";
    studentvalues.map((data)=>
    {
        hi+="<tr><td>"+data+"</td></tr>"
    })
    const performance=document.getElementById('live');
    performance.innerHTML="<table align='center' style='padding: 10px 10px 5px 10px; box-shadow:5px 6px 4px pink;'><thead><tr><th> Student Names</th></tr></thead><tbody>"+hi+"</tbody></table>"
}

let updating=()=>
{
    let index=document.getElementById('users').value
    const newone=prompt("Tell us what value you want update/replace"+studentvalues[index])
    studentvalues[index]=newone;
}

var deleting=()=>
{
    let temp=document.getElementById('users').value
    studentvalues=studentvalues.filter((data)=>
    {
        return data!==temp;
    })
}
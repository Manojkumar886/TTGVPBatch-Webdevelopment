let Action=()=>
{
    let a=document.forms['irctc'].fno.value;
    let b=document.forms['irctc'].Svalue.value;
    let c=document.forms['irctc'].pin.value;
    let active=true;

    if(a.length<=0)
    {
        document.getElementById('fdetails').innerHTML="Flat input should't empty";
        active=false;
    }

    if(b.length<=0)
    {
        document.getElementById('sdetails').innerHTML="Street name should't empty";
        active=false;   
    }
    else if(!(/^[A-Za-z]+$/).test(b))
    {
        document.getElementById('sdetails').innerHTML="Street name should't use numerical numbers";
        active=false; 
    }
    return active;

}
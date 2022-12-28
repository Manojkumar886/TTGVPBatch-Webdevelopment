let Action=()=>
{
    let a=document.forms['irctc'].fno.value;
    let b=document.forms['irctc'].Svalue.value;
    let c=document.forms['irctc'].pin.value;
    let d=document.forms['irctc'].email1.value;

    let active=true;
    if(d.length<=0)
    {
        document.getElementById('edetails').innerHTML="Email id should't empty";
        active=false;
    }
    else if(!((/^(?=.*[0-9])(?=.+[@.])[a-z0-9@.]+$/).test(d)))
    {
        document.getElementById('edetails').innerHTML="Email id used by @ . symbol";
        active=false;
    }
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
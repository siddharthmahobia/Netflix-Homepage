function changemode()
{
    let mybody=document.body;
    mybody.classList.toggle("darkmode");
}

function closecoupan()
{
    document.getElementById("coupanmain").style.visibility="hidden";
    document.getElementById("coupanmain").style.opacity="1";

}

function loadcoupan()
{
    document.getElementById("coupanmain").style.visibility="visible";
    document.getElementById("coupanmain").style.opacity="0.5";

}
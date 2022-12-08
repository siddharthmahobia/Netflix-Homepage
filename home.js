//this function is for ligt and dark mode
function changemode()
{
    let mybody=document.body;
    mybody.classList.toggle("darkmode");
}


//this function is for the coupan code

function loadCoupon()
    {
        document.getElementById('coupon').style.visibility = 'visible';
        document.getElementById('coupanmain').style.opacity='1';
        document.body.style.opacity=0.8;
    }

function closeCoupon()
    {
        document.getElementById('coupon').style.visibility = 'hidden';
        document.getElementById('coupanmain').style.opacity='1';
        document.body.style.opacity=1;
    }




// this script is for the coupan code
// window.onload = loadCoupon();











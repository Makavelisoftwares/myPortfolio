var menu=document.querySelector('.menu i');
var nav=document.querySelector('nav');

nav.style.left="-100%"
menu.onclick=()=>{
    if(nav.style.left=="-100%"){
        nav.style.left="0%"
    }else{
        nav.style.left="-100%"
    }

}
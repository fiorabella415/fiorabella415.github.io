var img = document.getElementsByTagName('img')[1];

function moveSunglasses(event){
    img.style.left = event.clientX - 90+ 'px';   
    img.style.top = event.clientY - 90+ 'px';     
}

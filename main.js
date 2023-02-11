let img = document.querySelector("img")

imgSize = () =>{
    if(window.innerHeight >= window.innerWidth){
        img.style.width = "100vw";
        img.style.height = "auto";
    } else{
        img.style.height = "100vh";
        img.style.width = "auto";
    }
}

imgSize()

window.addEventListener("load",()=>{
    setTimeout(function(){
        document.querySelector("#loading").style.opacity = 0;
    }, 1000); 
    

})
window.addEventListener("resize", imgSize);

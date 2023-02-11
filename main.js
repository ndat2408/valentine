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

window.addEventListener("resize", imgSize);
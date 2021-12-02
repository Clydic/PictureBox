var image = document.querySelectorAll("img");
var bigImage = document.getElementById("bigpicture")

for(var i =0 ; i<image.length;i++){
    if(image[i] != bigImage) image[i].addEventListener("click", function(){affiche(this)});
    

}

// bigImage.removeEventListener("click", function(){affiche(this)})
function affiche(element){
    document.getElementById("titrimg").innerText = element.title;
    document.getElementById("comm").innerText = element.alt;
    bigImage.setAttribute("src",element.src) ;
    console.log("ok");
    

}


// bigImage.removeEventListener("click", function() { affiche(this) })

var app = new Vue({
    el: '#app',
    data: {
        titlePage: "My Picture Box",
        message: "Vous avez affiché cette page le " + new Date().toLocaleString(),
        category : "libellule",
        pathImage : "../assets/img/category/",
        nav: [
            { text: "Venise" },
            { text: "Montréal" },
            { text: "Munich" },
            { text: "Paris" },
            { text: "Nice" },
            { text: "Lisbonne" },
        ],
        images: libellule,
        bigImage: {
            src: pathImage + "20200803_0003.jpg",
            alt: "Une jolie libellule vu de profile qui se repose",
            title: "Libellule de profile"
        }
    },

})

var images = document.querySelectorAll("img");
for (var i = 0; i < images.length; i++) {
    var bigPicture = document.getElementById("bigpicture");
    if (images[i] != bigPicture) images[i].addEventListener("click", function() { affiche(this) });


}

///////////////////////////Functions/////////////////////////
/**
 *Change change the big picture, its title and its commentary 
 * @param {HTMLElement} element 
 */
function affiche(element) {
    app.bigImage.src = element.src;
    app.bigImage.title = element.title;
    app.bigImage.alt = element.alt;

    console.log('ok');


}

/*var app2 = new Vue({
    el: '#app-2',
    data: {
    }
})*/

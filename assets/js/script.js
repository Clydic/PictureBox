var pathImage = "../assets/img/"

// bigImage.removeEventListener("click", function() { affiche(this) })

var app = new Vue({
    el: '#app',
    data: {
        titlePage: "My Picture Box",
        message: "Vous avez affiché cette page le " + new Date().toLocaleString(),
        pathImage: "../assets/img/",
        nav: [
            { text: "Venise" },
            { text: "Montréal" },
            { text: "Munich" },
            { text: "Paris" },
            { text: "Nice" },
            { text: "Lisbonne" },
        ],
        images: [{
                src: pathImage + "20200803_0003.jpg",
                title: "Libellule de profile",
                alt: "Une jolie libellule vu de profile qui se repose"
            },
            {
                src: pathImage + "P7247983_02.jpg",
                title: "Libellule sur une feuille",
                alt: "Une libellule qui vient de se poser"
            },
            {
                src: pathImage + "P7247983.jpg",
                title: "Libellule sur une feuille",
                alt: "Une libellule qui vient de se poser"
            },
            {
                src: pathImage + "P7247987.jpg",
                title: "Libellule dans les feuillages",
                alt: "Un joli spectacle volé à travers les feuillages"
            },
            {
                src: pathImage + "P7247990.jpg",
                title: "Libellule vue de près",
                alt: "Une libellule posé sur une grosse feuille et vu de prés"
            },
            {
                src: pathImage + "P7247998.jpg",
                title: "Une jolie libellule posé à la verticale",
                alt: "Une petite libellule posé à la verticale nous permettant d'admirer ses ailes"
            },
            {
                src: pathImage + "P7308269.jpg",
                title: "Libellule jaune",
                alt: "Une grosse libellule qui se repose sur une pierre"
            }
        ],
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
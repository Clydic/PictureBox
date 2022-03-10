var bigImage = document.getElementById("bigpicture");
var titlePage = "My Picture Box2";
var pathImage = "assets/img/"

// bigImage.removeEventListener("click", function() { affiche(this) })

function affiche(element) {
    document.getElementById("titrimg").innerText = element.title;
    document.getElementById("commentary").innerText = app.message;
    bigImage.setAttribute("src", element.src);
    bigImage.setAttribute("alt", element.alt);
    bigImage.setAttribute("title", element.title);
    console.log(bigImage);


}

var app = new Vue({
    el: '#wrapper',
    data: {
        titlePage: titlePage,
        message: "Vous avez affiché cette page le " + new Date().toLocaleString(),
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
        ]
    },

})

var image = document.querySelectorAll("img");
for (var i = 0; i < image.length; i++) {
    if (image[i] != bigImage) image[i].addEventListener("click", function() { affiche(this) });


}

/*var app2 = new Vue({
    el: '#app-2',
    data: {
    }
})*/
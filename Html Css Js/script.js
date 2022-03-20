



// Barre de Navigation Fixe Anime.
$(document).ready(function(){
        $(window).scroll(function(){
            if(this.scrollY > 20){
                $('.navbar').addClass("sticky");
            }else{
                $('.navbar').removeClass("sticky");
            }
        })
})


// Typing Text Animation
var typed = new Typed(".typing", {
    strings: ["Designer Web", "Developpeur", "Vidéaste"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing-2", {
    strings: ["Designer Web", "Developpeur", "Vidéaste"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
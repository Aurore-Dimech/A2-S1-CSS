const mediaQuery = window.matchMedia('(max-width:1050px)' && '(orientation: portrait)');

window.onresize = menuBurger;

function menuBurger() {
    let x = (document.getElementsByClassName("autresPages"))[0];
    let y = (document.getElementsByClassName("connexInscrip"))[0];
    if (mediaQuery.matches){
        if (window.getComputedStyle(x).position === "absolute") {
        x.style.position = "static";
        y.style.position = "static";
        } else {
        x.style.position = "absolute";
        y.style.position = "absolute";
        }
    }else{
        x.style.position = "static";
        y.style.position = "static";
    }
    
}
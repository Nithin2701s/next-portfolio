
window.onscroll = () => {
    ScrollReveal({
        distance : "80px" ,
        duration : 2000,
        delay : 200,
    });  
    ScrollReveal().reveal('.home-content, heading', { origin : 'top'});  
}
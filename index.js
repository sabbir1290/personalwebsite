$(document).ready(function(){
    $(window).scroll(function (){
        if(this.scrollY > 20){
            $('.navbar1').addClass("sticky")
        }else{
            $('.navbar1').removeClass("sticky")
        }
      
      
    });

    // slide-up script
  



//     tooggle menu baton

   $('.menu-btn').click(function (){
       $('.navbar1 .menu1').toggleClass("active")
       $('.menu-btn i').toggleClass("active")
   })

});

var typed = new Typed('.text', {
    strings: ["Freelancer", "Web Developer", "Blogger", "Web Desinger","Programing"],
    typeSpeed: 60,
    backSpeed: 60,
    loop:true
    });


    var typed = new Typed('.type', {
    strings: ["Freelancer", "Web Developer", "Blogger", "Web Desinger", "Programing"],
    typeSpeed: 60,
    backSpeed: 60,
    loop:true
    });

   